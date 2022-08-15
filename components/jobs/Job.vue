<script lang="ts">
import { defineComponent, computed, reactive, toRefs, onMounted } from '@nuxtjs/composition-api'
import { InsidePropsType } from '@icare-jp/vue-props-type'

const propsOption = {
	title:{ type: String, default: '' },
	img:{ type: String, default: '' },
	href:{ type: String, default: '' },
	text:{ type: String, default: '' },
	score: { type: Number, default: 0 },
}
type Props = typeof propsOption

type State = {
  loading: boolean
}

const initializeState = (): State => ({
  loading: true,
})

export default defineComponent<InsidePropsType<Props>>({
  components: {
  },
	props: propsOption,
  setup(props) {
    const state = reactive<State>(initializeState())

    onMounted(() => {
      state.loading = false;
    })

    return{
      ...toRefs(state),
      selection: 1,
			outlineScore: computed(() => 5 - props.score),
		}
  }
})
</script>

<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 pa-4"
    max-width="374"
    height="590"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="img-area">
     <img :src="img" alt="product" height="250">
    </div>


    <v-card-title class="font-bold">{{title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 mb-4"
      >
				<div class="score text-base">
					<span v-for="(s, i) in score" :key="`circle-${i}`">
						<v-icon size="20">mdi-star</v-icon>
					</span>
					<span v-for="(s, i) in outlineScore" :key="`outline-${i}`">
						<v-icon size="20">mdi-star-outline</v-icon>
					</span>
				</div>
        <div class="ms-4 text-base">
          {{score}}
        </div>
      </v-row>
      <div class="text-base">{{text}}</div>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.img-area{
  img {
    width: 100%;
    object-fit: contain;
    &:hover{
      opacity: 0.6;
    }
  }
}
.v-card__title{
  &:hover{
    color: map-get($accent, main);
  }
}
.v-card__text{
  width: fit-content;
}

</style>