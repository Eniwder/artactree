<template>
  <v-app>
    <div>
      <v-app-bar color="purple darken-3" prominent>
        <!-- <v-toolbar-title v-show="!$vuetify.breakpoint.xs">アルタク 合成ツリー</v-toolbar-title> -->

        <v-spacer></v-spacer>

        <v-container>
          <v-row>
            <v-autocomplete
              solo
              v-show="!$vuetify.breakpoint.xs"
              v-model="filterName"
              :items="heroNames"
              :filter="filteredHeroNames"
              prepend-inner-icon="mdi-magnify"
              clearable
              :search-input.sync="queringtext"
              @click:clear="resetFilter(true)"
              ref="autocomplete"
            ></v-autocomplete>

            <v-spacer></v-spacer>
            <v-btn-toggle v-model="filterElem" dark class="elem-group">
              <v-btn value="fire">
                <v-img max-width="24px" src="./assets/res/elem_fire.png"></v-img>
              </v-btn>
              <v-btn value="ice">
                <v-img max-width="24px" src="./assets/res/elem_ice.png"></v-img>
              </v-btn>
              <v-btn value="green">
                <v-img max-width="24px" src="./assets/res/elem_green.png"></v-img>
              </v-btn>
              <v-btn value="light">
                <v-img max-width="24px" src="./assets/res/elem_light.png"></v-img>
              </v-btn>
              <v-btn value="dark">
                <v-img max-width="24px" src="./assets/res/elem_dark.png"></v-img>
              </v-btn>
              <v-btn value="ian">
                <v-img max-width="24px" src="./assets/res/elem_ian.png"></v-img>
              </v-btn>
            </v-btn-toggle>
            <v-btn icon @click="resetFilter(true)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-menu left bottom :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>

                <v-list-item>
                    <v-spacer></v-spacer>
                    <v-btn icon href="https://github.com/Eniwder/artactree" target="_blank">
                       <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                                    </v-list-item>

                <v-list-item class="options">
                  <v-list-item-title>
                    <v-slider max="240" min="100" label="アイコンサイズ" v-model="opts.iconWidth"></v-slider>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="options">
                  <v-list-item-title>
                    <v-slider max="1" min="0" step="0.05" label="透過度" v-model="opts.opacity"></v-slider>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.deleteName" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>名前を省略</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.elemBack" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>属性カラー</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.typeBack" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>タイプ表示</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.reverse" color="purple"></v-switch>
                  </v-list-item-action>
                    <v-list-item-title>リバース</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.horizon" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>水平表示</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="filterType" dark class="type-group">
              <v-btn value="sword">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_sword.png"></v-img contain>
              </v-btn>
              <v-btn value="arrow">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_arrow.png"></v-img contain>
              </v-btn>
              <v-btn value="assassin">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_assassin.png"></v-img>
              </v-btn>
              <v-btn value="magic">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_magic.png"></v-img contain>
              </v-btn>
              <v-btn value="heal">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_heal.png"></v-img contain>
              </v-btn>
              <v-btn value="fist">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_fist.png"></v-img contain>
              </v-btn>
              <v-btn value="spear">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_spear.png"></v-img>
              </v-btn>
              <v-btn value="spilit">
                <v-img contain width="24px" max-height="32px" src="./assets/res/type_spilit.png"></v-img>
              </v-btn>
            </v-btn-toggle>
          </v-row>
        </v-container>
      </v-app-bar>
      <div :style="{ display: arrange }" class="heros">
        <hero-list
          v-for="lv in lvs"
          :key="lv"
          :level="lv"
          :opts="opts"
          :filterElem="filterElem"
          :filterType="filterType"
          @evoSearch="evoSearch"
          @devoSearch="devoSearch"
          @childrenSearch="childrenSearch"
          @parentSearch="parentSearch"
          @resetFilter="resetFilter(true)"
          ref="heroLists"
        ></hero-list>
      </div>
    </div>
  </v-app>
</template>

<script>
// TODO 透過度
// 盾横
// reverse
import HeroList from './components/heroList.vue';
import heros from '@/heroDB.js';

const range = (n) => [...Array(n).keys()];
function reverse(arr) {
  if (arr.length === 0) return arr;
  var copy = arr.slice();
  return copy.reverse();
}

export default {
  name: 'App',

  components: { HeroList },

  data: () => ({
    queringtext: '',
    filterElem: undefined,
    filterType: undefined,
    filterName: undefined,
    opts: {
      iconWidth: 140,
      deleteName: false,
      elemBack: true,
      typeBack: true,
      horizon: false,
      opacity: 0.4,
      reverse: false,
    },
    levels: range(5),
    heroNames: heros.flat().map((_) => _.name),
  }),
  computed: {
    lvs() {
      return this.opts.reverse ? reverse(this.levels) : this.levels;
    },
    arrange() {
      return this.opts.horizon ? 'flex' : 'block';
    },
  },
  methods: {
    resetFilter(active) {
      this.filterName = '';
      this.filterElem = undefined;
      this.filterType = undefined;
      this.$refs.heroLists.forEach((_) => _.resetHeroStatus(active));
    },
    filteredHeroNames(item, queryText, itemText) {
      const hiragana2Katagana = (src) => {
        return src.replace(/[\u3041-\u3096]/g, function (match) {
          var chr = match.charCodeAt(0) + 0x60;
          return String.fromCharCode(chr);
        });
      };

      queryText = hiragana2Katagana(queryText.replace(/[nｎ]/g, 'ん'));
      return itemText.indexOf(queryText) > -1;
    },
    evoSearch(event) {
      this.resetFilter(false);
      this.childrenSearch(event);
      this.parentSearch(event);
    },
    devoSearch(event) {
      this.childrenSearch(event, -1);
    },
    childrenSearch(event, need) {
      if (event.level > 0)
        this.$refs.heroLists[event.level - 1].childrenSearch(event.trg.children, need);
    },
    parentSearch(event) {
      if (event.level < this.$refs.heroLists.length - 1)
        this.$refs.heroLists[event.level + 1].parentSearch(event.trg.parent);
    },
    nameSearch() {
      this.$refs.heroLists.forEach((heros) => heros.nameSearch(this.filterName));
    },
  },
  mounted() {
    Object.assign(this.opts, $cookies.get('opts'));
  },
  watch: {
    opts: {
      handler() {
        // 必要に応じてdebounceなど
        this.$cookies.set('opts', this.opts);
      },
      deep: true,
    },
    queringtext(v, ov) {
      if (typeof v === 'string' && v.trim() === '') {
        this.filterName = '';
        this.resetFilter(true);
      } else {
      }
    },
    filterName() {
      this.nameSearch();
      this.$refs.autocomplete.blur();
    },
    filterElem() {
      this.$refs.heroLists.forEach((_) => _.resetHeroStatus(true));
    },
    filterType() {
      this.$refs.heroLists.forEach((_) => _.resetHeroStatus(true));
    },
  },
};
</script>

<style>
.elem-group .v-btn {
  background-color: #f3e5f5 !important;
}
.type-group .v-btn {
  background-color: #9575cd !important;
}

.v-text-field__details {
  display: none !important;
}

.v-input__slot {
  margin: 0 !important;
}

.v-toolbar__content {
  min-width: 430px;
}

.v-toolbar__content .row {
  margin-top: 7px;
}

.v-toolbar__content .row + .row {
  margin-top: 20px !important;
}

.v-toolbar__content .container {
  padding-top: 0px !important;
}

.options {
  width: 400px;
}

.v-application {
  font-family: 'M PLUS Bold 1c' !important;
  overflow-x: auto;
}
.v-application--wrap {
  min-height: 100% !important;
}

header {
  position: fixed !important;
}

.heros {
  margin-top: 128px;
}
</style>