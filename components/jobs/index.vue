<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Job from './Job.vue'

export default defineComponent({
  components: {
    Job
  },
  setup() {
    return{
			items: [
        {
          title: 'Dulce De Leche Churro Ice Cream',
					img: '/img/1.png',
          href: 'https://www.icecream.com/us/en/brands/haagen-dazs/products/dulce-de-leche-churro-ice-cream',
					text: 'Cinnamon churro ice cream and thick, gooey dulce de leche sauce is mixed with crispy, cinnamon-y churro pieces. Heaven on a spoon.',
					score: 5,
        },
        {
          title: 'Chocolate Peanut Butter Pretzel Ice Cream',
					img: '/img/2.png',
          href: 'https://www.icecream.com/us/en/brands/haagen-dazs/products/chocolate-peanut-butter-pretzel-ice-cream',
					text: 'Our incredible chocolate ice cream and thick, creamy peanut butter are complemented by crunchy, lightly salted pretzel pieces. We took a classic and created a new one.',
					score: 3,
        },
        {
          title: 'Black & White Cookie Ice Cream',
					img: '/img/3.png',
          href: 'https://www.icecream.com/us/en/brands/haagen-dazs/products/black-and-white-cookie-ice-cream',
					text: 'Inspired by New York’s classic Black & White cookie, we mixed vanilla bean ice cream with soft cookie pieces and ripples of chocolate frosting. Forget the cookie and grab your spoon.',
					score: 4,
        },
        {
          title: 'Vanilla Blackberry Chocolate Ice Cream TRIO CRISPY LAYERS',
					img: '/img/4.png',
          href: 'https://www.icecream.com/us/en/brands/haagen-dazs/products/trio-vanilla-blackberry-chocolate-crispy-layers',
					text: 'It begins with the classic taste of pure vanilla ice cream then, one layer of crispy Belgian chocolate later, becomes the vine-ripened intensity of blackberry ice cream.',
					score: 4,
        },
        {
          title: 'Dulce De Leche Churro Ice Cream',
					img: '/img/1.png',
          href: 'https://www.icecream.com/us/en/brands/haagen-dazs/products/dulce-de-leche-churro-ice-cream',
					text: 'Cinnamon churro ice cream and thick, gooey dulce de leche sauce is mixed with crispy, cinnamon-y churro pieces. Heaven on a spoon.',
					score: 5,
        },
        {
          title: 'Chocolate Peanut Butter Pretzel Ice Cream',
					img: '/img/2.png',
          href: 'https://www.icecream.com/us/en/brands/haagen-dazs/products/chocolate-peanut-butter-pretzel-ice-cream',
					text: 'Our incredible chocolate ice cream and thick, creamy peanut butter are complemented by crunchy, lightly salted pretzel pieces. We took a classic and created a new one.',
					score: 3,
        },
      ],
		}
  }
})
</script>

<template>
	<div class="jobs-area">
		<v-row >
    	<v-col
				v-for="(item, i) in items" :key="i"
			  cols="12" xs="12" sm="6" md="6" lg="4">
				<Job
					:title="item.title"
					:img="item.img"
					:href="item.href"
					:text="item.text"
					:score="item.score"
				/>
			</v-col>
		</v-row>
	</div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/main.scss';
</style>