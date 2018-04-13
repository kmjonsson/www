

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9-desktop is-offset-0-desktop is-10-touch is-offset-1-touch">
        <div class="columns">
          <div class="column is-12 has-text-centered">
            <h1 class="is-size-1">{{page.title}}</h1>
            <h2 class="is-size-4" v-if="page.subtitle">{{page.subtitle}}</h2>
          </div>
        </div>
          <!-- <component v-bind:is="body"></component> -->
          <div class="modal is-active">
            <div class="modal-background"></div>
            <transition name="fade" mode="out-in">
            <div v-if="imageStyle" class="modal-content image" :style="imageStyle" @click="nextImage"></div>
            </transition>
            <button class="modal-close is-large" aria-label="close"></button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import converter from './md.js'

import FocusImage from './FocusImage.vue'
import SubMeny from './SubMeny.vue'

export default {
  name: 'DefaultView',
  props: ['page'],
  created() {
    console.log(this);
    this.nextImage();
  },
  data () {
    return {
      images: [
        'https://g9.fot.nu/object/originalImageObj17885.jpg',
        'https://g9.fot.nu/object/originalImageObj17894.jpg'
      ],
      imageStyle: null,
      i: 17894,
    }
  },
  computed: {
    body() {
      return {
        template: '<div class="content has-text-justified-mobile">' + converter.makeHtml(this.page.body) + "</div>"
      }
    }
  },
  components: {
    FocusImage,SubMeny
  },
  methods: {
    nextImage() {
      console.log("flärp");
      //this.i = (++this.i) % 2;
      //this.loadImage(this.images[this.i]);
      this.i++;
      //this.loadImage('https://g9.fot.nu/object/originalImageObj'+this.i+'.jpg')
      this.loadImage('https://g9.fot.nu/object/small'+this.i+'.jpg')
    },
    loadImage(url) {
      this.imageStyle = null;
      return new Promise(function(resolve, reject) {
        var img = new Image()
        img.onload = function() {
          this.imageStyle = { 'background-image': "url(" + url + ")" };
          resolve(url)
        }.bind(this);
        img.onerror = function() {
          reject(url)
        }
        img.src=url;
      }.bind(this));
    }
  }
}

</script>

<style scoped>
div.image {
  margin: 0 auto;
  /*height: calc(100vh - 15px);
  width: calc(100vw - 15px);*/
  height: calc(100vh);
  width: calc(100vw);
  background-size: contain;  
  background-repeat: no-repeat;
  background-position: center;
}
div.indrag {
  margin-left: 8.33333%;
  padding: 0.75rem;
}
</style>