<template>
  <div
    class="wrapper"
    :style="{
      backgroundColor: elemColorStyle,
      borderColor: borderCor,
      opacity: _opacity,
      display: display,
      width: width,
      backgroundImage: backgroundImage,
    }"
    @click.left="selected"
    @click.right="selectedRight"
  >
    <span v-show="count > 1" class="reqCount" :style="{ bottom: reqBottom }">x{{ count }}</span>
    <v-img :width="imgWidth" :src="imgSrc"></v-img>
    <span v-show="showName">{{ langName }}</span>
  </div>
</template>

<script>
export default {
  // name: 'Hero',
  props: {
    id: String,
    name: String,
    type: String,
    elem: String,
    role: String,
    lang: Object,
    opacity: Number,
    active: Boolean,
    deleteName: Boolean,
    elemBack: Boolean,
    typeBack: Boolean,
    count: Number,
    filterElem: String,
    filterType: String,
    filterRole: String,
    focus: Boolean,
    width: String,
    opts: {
      launage: String,
    }
  },
  components: {},
  computed: {
    imgSrc() {
      return require(`@/assets/res/${this.id}.png`);
    },
    backgroundImage() {
      return this.typeBack ? 'url(' + require(`@/assets/res/type_${this.type}b.png`) + ')' : '';
    },
    imgWidth() {
      return this.deleteName ? '100%' : '50%';
    },
    showName() {
      return !this.deleteName;
    },
    reqBottom() {
      return this.showName ? '-30%' : '-10%';
    },
    isActive() {
      const fe = !this.filterElem || this.filterElem === this.elem;
      const ft = !this.filterType || this.filterType === this.type;
      const fr = !this.filterRole || this.filterRole === this.role;
      const filterd = fe && ft && fr;
      return filterd && (this.active || this.count > 0 || this.focus);
    },
    elemColorStyle() {
      if (!this.elemBack) return '';
      const colors = {
        fire: '#e49797',
        ice: '#a3bdde',
        green: '#8bcaa1',
        light: '#dad196',
        dark: '#c8abe2',
        ian: '#c5c5c5',
      };
      return colors[this.elem];
    },
    borderCor() {
      return this.focus && this.count <= 0 ? '#939225' : this.focus ? '#FDD835' : '';
    },
    _opacity() {
      return this.isActive ? '1' : this.opacity;
    },
    display() {
      return this.isActive || this.opacity ? 'inline-block' : 'none';
    },
  },
  methods: {
    selected(event) {
      if (event.ctrlKey || event.shiftKey) {
        this.$emit('optinalSelected', this.id);
      } else {
        this.$emit('selected', this.id);
      }
    },
    selectedRight(event) {
      event.preventDefault();
      this.$emit('selectedRight', this.id);
    },
    launageChange() {
      this.langName = this.lang[this.opts.launage];
    }
  },
  data: () => ({
    langName: '',
    style: 'font-size:16px',
    options: {
      minSize: 11,
      maxSize: 120,
    },
  }),
  mounted() {
    this.launageChange();
  },
  watch: {
    'opts.launage'() {
      this.launageChange();
    },
  },
};
</script>

<style scoped>
.v-image {
  display: inline-block;
  margin-left: -5px;
  margin-top: 0px;
  margin-bottom: -4px;
}
.wrapper {
  border: 4px solid #cec3d1;
  display: inline-block;
  border-radius: 80px;
  margin: 6px;
  width: 100%;
  position: relative;
  background-color: #e0e0e0;
  cursor: pointer;
  user-select: none;
  font-family: 'M PLUS Bold 1c';
  background-position: 95% 0;
  background-size: auto 100%;
}

.wrapper span {
  margin-left: -20px;
  bottom: 2px;
  position: absolute;
}
.loading {
  opacity: 0;
}
.reqCount {
  position: absolute;
  right: -7%;
  font-size: 1.5em;
}
</style>