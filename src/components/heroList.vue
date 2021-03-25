<template>
  <v-card
    :style="{ backgroundColor: colors[level], minWidth: minWidth, maxHeight: maxHeight }"
    @click.right="rclick"
    ref="wrapper"
  >
    <div v-for="heroType in heroTypeList" :key="heroType" :class="heroTypeClass">
      <div
        v-for="hero in filterHeroByType(heroType)"
        :key="hero.id"
        :class="heroClass"
        :style="{ fontSize: fontSizePx }"
      >
        <hero
          v-bind="hero"
          :opts="opts"
          :filterElem="filterElem"
          :filterType="filterType"
          :filterRole="filterRole"
          :width="iconWidthPx"
          @selected="selected($event)"
          @optinalSelected="additinalEvoSearch($event)"
          @selectedRight="selectedRight($event)"
        ></hero>
      </div>
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
    heroTypeList: Array,
    opts: {
      iconWidth: Number,
      deleteName: Boolean,
      elemBack: Boolean,
      opacity: Number,
      horizon: Boolean,
      launage: String,
      gamemode: Boolean,
    },
    filterElem: null,
    filterType: null,
    filterRole: null,
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
    heroTypeClass() {
      return this.opts.gamemode && !this.opts.horizon ? 'gamemode-heroType' : 'heroType';
    },
    heroClass() {
      return this.opts.gamemode && !this.opts.horizon ? 'gamemode-hero' : 'hero';
    },
  },
  data: () => ({
    colors: ['#9E9E9E', '#a4b4a5', '#a4adc0', '#a68daf', '#b7af80'],
    heros: [],
    minWidth: '128px',
    maxHeight: 'max-height: calc(100vh - 128px);',
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
    filterHeroByType(type) {
      return this.heros.filter((hero) => hero.type === type);
    },
    adjustHeight(e) {
      // iconW:iconH = 14:5
      const iconRate = this.opts.deleteName ? '0.7' : '0.36';
      const margin = 12 + 1; // margin:12, 誤差:1
      const iconW = this.opts.iconWidth;
      const iconH = iconW * iconRate + margin;
      const maxH = window.innerHeight - 128;
      const maxW = window.innerWidth;
      const rows = maxH / iconH - 1;
      const cols = maxW / (iconW + margin);
      const needCols = parseInt(this.heros.length / rows + 0.99);
      const needRows = parseInt(this.heros.length / cols + 0.99);
      const gamemodeHeroCounts = this.heros.reduce((groups, item) => {
        const val = item['type'];
        groups[val] = groups[val] || 0;
        groups[val]++;
        return groups;
      }, {});
      const gamemodeNeedCols = Object.keys(gamemodeHeroCounts)
        .map((key) => gamemodeHeroCounts[key])
        .reduce((max, val) => (max > val ? max : val));
      const _minWidth = needCols * (iconW + margin);
      const _mingamemodWidth = gamemodeNeedCols * (iconW + margin);

      this.minWidth =
        (this.opts.horizon
          ? this.opts.gamemode
            ? _mingamemodWidth
            : _minWidth
          : Math.min(window.innerWidth, _minWidth)) + 'px';
      this.maxHeight =
        (this.opts.horizon
          ? window.innerHeight
          : Math.max(window.innerHeight, needRows * (iconH + margin))) + 'px';
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
    selected(id) {
      const trg = this.heros.find((hero) => hero.id === id);
      const focus = trg.focus;
      this.resetHeroStatus(trg.focus);
      if (focus) {
        this.$emit('resetFilter');
      } else {
        this.$emit('evoSearch', { trg, level: this.level }); // このコンポーネント間でherosの状態を変えていくか、一旦親に任せるか悩む
      }
      trg.count += 1;
      trg.focus = !focus;
    },
    additinalEvoSearch(id) {
      const trg = this.heros.find((hero) => hero.id === id);
      trg.count += 1;
      trg.focus = true;
      this.$emit('additinalEvoSearch', { trg, level: this.level, add: true }); // このコンポーネント間でherosの状態を変えていくか、一旦親に任せるか悩む
    },
    selectedRight(id) {
      const trg = this.heros.find((hero) => hero.id === id);
      if (trg.count < 1) return;
      trg.count -= 1;
      this.$emit('devoSearch', { trg, level: this.level });
    },
    dchildrenSearch(children) {
      const thisLevelChildren = children.filter((_) => _.level === this.level);
      const lowLevelChildren = children.filter((_) => _.level !== this.level);
      const nextChildren = [
        lowLevelChildren,
        thisLevelChildren.map((_) => _.children).flat(),
      ].flat();
      children.forEach((hero) => {
        const minCount = hero.parent.reduce((acc, v) => {
          const subCount = v.children.reduce((acc, v) => {
            acc += v.id === hero.id ? 1 : 0;
            return acc;
          }, 0);
          acc += v.count * subCount;
          return acc;
        }, 0);
        hero.count = Math.min(hero.count, minCount);
      });
      this.$emit('devoSearch', {
        trg: {
          children: nextChildren,
        },
        level: this.level,
      });
    },
    childrenSearch(children, add) {
      if (!add) this.resetHeroStatus();
      const thisLevelChildren = children.filter((_) => _.level === this.level);
      const lowLevelChildren = children.filter((_) => _.level !== this.level);
      const nextChildren = [
        lowLevelChildren,
        thisLevelChildren.map((_) => _.children).flat(),
      ].flat();
      thisLevelChildren.forEach((hero) => (hero.count += 1));
      this.$emit('childrenSearch', {
        trg: {
          children: nextChildren,
        },
        level: this.level,
        add: add,
      });
    },
    parentSearch(parent, add) {
      if (add) this.resetHeroStatus();
      parent.forEach((hero) => (hero.active = true));
      this.$emit('parentSearch', {
        trg: { parent: parent.map((_) => _.parent).flat() },
        level: this.level,
        add: add,
      });
    },
    nameSearch(name) {
      const trg = this.heros.find((hero) => hero.lang[this.opts.launage] === name);

      if (trg) {
        this.selected(trg.id);
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
.gamemode-hero {
  display: block;
}
.gamemode-heroType {
  display: inline-block;
  vertical-align: text-top;
}
.heroType {
  display: inline;
}
.v-card {
  max-height: calc(100vh - 128px);
}
.heroType-item {
  display: inline-block;
  margin-right: 10px;
}
</style>
