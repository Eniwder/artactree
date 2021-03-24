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
              v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
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
                    <v-slider
                      max="240"
                      min="80"
                      :label="this.appLaunages.options.iconWidth"
                      v-model="opts.iconWidth"
                    ></v-slider>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="options">
                  <v-list-item-title>
                    <v-slider
                      max="1"
                      min="0"
                      step="0.05"
                      :label="this.appLaunages.options.opacity"
                      v-model="opts.opacity"
                    ></v-slider>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-radio-group v-model="opts.launage" row v-on:change="launageSetup">
                      <v-radio color="purple" label="日本語" value="ja"></v-radio>
                      <v-radio color="purple" label="中文" value="zh"></v-radio>
                  </v-radio-group>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.deleteName" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>{{ this.appLaunages.options.deleteName }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.elemBack" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>{{ this.appLaunages.options.elemBack }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.typeBack" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>{{ this.appLaunages.options.typeBack }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.reverse" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>{{ this.appLaunages.options.reverse }}</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch v-model="opts.horizon" color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>{{ this.appLaunages.options.horizon }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
          <v-row>
            <v-btn-toggle
              v-show="!$vuetify.breakpoint.xs"
              v-model="filterRole"
              dark
              class="type-group"
            >
              <v-btn value="attacker">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/role_attacker.png"
                ></v-img>
                {{ this.appLaunages.filterRole.attacker }}
              </v-btn>
              <v-btn value="defenser">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/role_defenser.png"
                ></v-img>
                {{ this.appLaunages.filterRole.defenser }}
              </v-btn>
              <v-btn value="helper">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/role_helper.png"
                ></v-img>
                {{ this.appLaunages.filterRole.helper }}
              </v-btn>
            </v-btn-toggle>

            <v-spacer></v-spacer>
            <v-btn-toggle v-model="filterType" dark class="type-group">
              <v-btn value="sword">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_sword.png"
                ></v-img>
              </v-btn>
              <v-btn value="arrow">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_arrow.png"
                ></v-img>
              </v-btn>
              <v-btn value="assassin">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_assassin.png"
                ></v-img>
              </v-btn>
              <v-btn value="magic">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_magic.png"
                ></v-img>
              </v-btn>
              <v-btn value="heal">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_heal.png"
                ></v-img>
              </v-btn>
              <v-btn value="fist">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_fist.png"
                ></v-img>
              </v-btn>
              <v-btn value="spear">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_spear.png"
                ></v-img>
              </v-btn>
              <v-btn value="spilit">
                <v-img
                  contain
                  width="24px"
                  max-height="32px"
                  src="./assets/res/type_spilit.png"
                ></v-img>
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
          :filterRole="filterRole"
          :filterType="filterType"
          @evoSearch="evoSearch"
          @additinalEvoSearch="additinalEvoSearch"
          @devoSearch="devoSearch"
          @childrenSearch="childrenSearch"
          @parentSearch="parentSearch"
          @resetFilter="resetFilter(true)"
          ref="heroLists"
        ></hero-list>
      </div>
    </div>

    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" snackbarText v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import HeroList from './components/heroList.vue';
import heros from '@/heroDB.js';
import languages from '@/languages.js';

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
    filterRole: undefined,
    filterName: undefined,
    opts: {
      iconWidth: 140,
      deleteName: false,
      elemBack: true,
      typeBack: true,
      horizon: false,
      opacity: 0.4,
      reverse: false,
      release: '',
      launage: 'ja',
    },
    levels: range(5),
    heroNames: [],
    snackbar: false,
    snackbarText: '',
    appLaunages: languages[Object.keys(languages)[0]],
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
      this.filterRole = undefined;
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
    additinalEvoSearch(event) {
      this.childrenSearch(event);
    },
    devoSearch(event) {
      if (event.level > 0)
        this.$refs.heroLists[event.level - 1].dchildrenSearch(event.trg.children);
    },
    childrenSearch(event) {
      if (event.level > 0)
        this.$refs.heroLists[event.level - 1].childrenSearch(event.trg.children, event.add);
    },
    parentSearch(event) {
      if (event.level < this.$refs.heroLists.length - 1)
        this.$refs.heroLists[event.level + 1].parentSearch(event.trg.parent, event.add);
    },
    nameSearch() {
      this.$refs.heroLists.forEach((heros) => heros.nameSearch(this.filterName));
    },
    launageSetup() {
      this.appLaunages = languages[this.opts.launage] ?? languages[Object.keys(languages)[0]];
      this.launageChange();
    },
    launageChange() {
      this.heroNames = heros.flat().map((_) => _.lang[this.opts.launage])
    }
  },
  mounted() {
    const release = '1.0.3';
    Object.assign(this.opts, $cookies.get('opts'));
    console.log(this.opts.release, release);

    this.launageSetup();
      
    if (this.opts.release !== release) {
      this.snackbar = true;
      this.snackbarText = this.appLaunages.snackbarText[release];
      this.opts.release = release;
    }
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
        this.snackbar = true;
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
    filterRole() {
      this.$refs.heroLists.forEach((_) => _.resetHeroStatus(true));
    },
    filterType() {
      this.$refs.heroLists.forEach((_) => _.resetHeroStatus(true));
    },    
    'opts.launage'() {
      this.launageChange();
    },
  }
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

@media screen and (max-width: 420px) {
  .row > .spacer {
    display: none !important;
  }
  .v-item-group .v-btn.v-btn.v-size--default {
    min-width: 40px !important;
    width: 40px !important;
  }
}
</style>