<template>
  <v-card
    :style="{ backgroundColor: colors[level], minWidth: minWidth }"
    @click.right="rclick"
    ref="wrapper"
  >
    <div v-for="hero in heros" :key="hero.id" class="hero" :style="{ fontSize: fontSizePx }">
      <hero
        v-bind="hero"
        :deleteName="opts.deleteName"
        :elemBack="opts.elemBack"
        :typeBack="opts.typeBack"
        :opacity="opts.opacity"
        :filterElem="filterElem"
        :filterType="filterType"
        :width="iconWidthPx"
        @selected="selected($event)"
        @selectedRight="selectedRight($event)"
      ></hero>
    </div>
  </v-card>
</template>

<script>
import Hero from './hero.vue';
import heros from '@/heroDB.js';

export default {
  components: {
    Hero,
  },
  props: {
    level: Number,
    opts: {
      iconWidth: Number,
      deleteName: Boolean,
      elemBack: Boolean,
      opacity: Number,
    },
    filterElem: null,
    filterType: null,
  },
  computed: {
    iconWidthPx() {
      return this.opts.iconWidth + 'px';
    },
    fontSizePx() {
      const w =
        this.opts.iconWidth < 100
          ? 10
          : this.opts.iconWidth < 150
          ? 12
          : this.opts.iconWidth < 180
          ? 14
          : this.opts.iconWidth < 200
          ? 20
          : 24;
      return w + 'px';
    },
  },
  data: () => ({
    colors: ['#9E9E9E', '#a4b4a5', '#a4adc0', '#a68daf', '#b7af80'],
    heros: [],
    filterParam: {
      ks: {
        elem: false,
        type: false,
        name: false,
      },
      vs: {
        elem: '',
        type: '',
        name: '',
      },
    },
    minWidth: '128px',
  }),
  mounted() {
    this.heros = heros[this.level];
    window.addEventListener('resize', this.adjustHeight);
    process.nextTick(() => this.adjustHeight());
  },
  destroyed() {
    window.removeEventListener('resize', this.adjustHeight);
  },
  methods: {
    adjustHeight(e) {
      // iconW:iconH = 14:5
      const iconRate = this.opts.deleteName ? '0.7' : '0.36';
      const margin = 12 + 1; // margin:12, 誤差:1
      const iconW = this.opts.iconWidth;
      const iconH = iconW * iconRate + margin;
      const maxH = window.innerHeight - 128;
      const rows = maxH / iconH - 1;
      const needLine = parseInt(this.heros.length / rows + 0.99);
      this.minWidth = Math.min(window.innerWidth, needLine * (iconW + margin)) + 'px';
    },
    rclick(e) {
      e.preventDefault();
    },
    resetHeroStatus(active) {
      this.heros.forEach((hero) => {
        hero.count = 0;
        hero.focus = false;
        hero.active = active;
      });
    },
    selected(name) {
      const trg = this.heros.find((hero) => hero.name === name);
      const focus = trg.focus;
      this.resetHeroStatus(trg.focus);
      if (focus) {
        this.$emit('resetFilter');
      } else {
        this.$emit('evoSearch', { trg, level: this.level }); // このコンポーネント間でherosの状態を変えていくか、一旦親に任せるか悩む
      }
      trg.focus = !focus;
    },
    selectedRight(name) {
      const trg = this.heros.find((hero) => hero.name === name);
      if (trg.count < 1) return;
      trg.count -= 1;
      // 自動で子を消す処理を入れると、素材が被っている時に対応ができない
      // いいアイディアがあれば実装
      // this.$emit('devoSearch', { trg, level: this.level });
    },
    childrenSearch(children, need) {
      need = need || 1;
      if (need > 0) {
        this.resetHeroStatus(false);
      }
      const thisLevelChildren = children.filter((_) => _.level === this.level);
      const lowLevelChildren = children.filter((_) => _.level !== this.level);
      const nextChildren = [
        lowLevelChildren,
        thisLevelChildren.map((_) => _.children).flat(),
      ].flat();
      thisLevelChildren.forEach((hero) => (hero.count += need));
      this.$emit(
        'childrenSearch',
        {
          trg: {
            children: nextChildren,
          },
          level: this.level,
        },
        need
      );
    },
    parentSearch(parent) {
      this.resetHeroStatus(false);
      parent.forEach((hero) => (hero.active = true));
      this.$emit('parentSearch', {
        trg: { parent: parent.map((_) => _.parent).flat() },
        level: this.level,
      });
    },
    nameSearch(name) {
      const trg = this.heros.find((hero) => hero.name === name);
      if (trg) {
        this.selected(name);
      }
    },
  },
  watch: {
    'opts.iconWidth'() {
      this.adjustHeight();
    },
  },
};
</script>

<style scoped>
.hero {
  display: inline-block;
}
.v-card {
  max-height: calc(100vh - 128px);
}
</style>
