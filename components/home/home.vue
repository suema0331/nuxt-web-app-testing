<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
  },
  setup() {

    return {
			items: [
				{
					src: '/img/5.png',
					title: 'Let your self shine!',
					text: 'Bring your whole self to work. We respect, embrace and foster diversity to build the very best teams and ways of working. With humility and honestly, we actively seek to understand how our differences bring us together and make us stronger.'
				},
				{
					src: '/img/6.png',
					title: 'Do something where you make an impact!',
					text: 'We’ve known Ice Cream for 100 years and we are still learning. We are growing and changing daily and seek out team members who want the same for their careers. At Dreyer’s hard work pays off! We offer career growth opportunities and ways to move from function to function in search of growth and value.'
				},
				{
					src: '/img/5.png',
					title: 'Be surrounded by amazing people!',
					text: 'Bring your whole self to work. We respect, embrace and foster diversity to build the very best teams and ways of working. With humility and honestly, we actively seek to understand how our differences bring us together and make us stronger.'
				},
				{
					src: '/img/7.png',
					title: 'Let your self shine!',
					text: 'Our people show up – and not to check a box. We want to drive results and be better every single day. We respect each other, have healthy conflict and challenge each other to make the best business decisions we can.'
				},
			],
    }
  },
})
</script>

<template>
  <section>
		<v-container>
			<div v-for="(item, i) in items" :key="i" class="box mb-6">
				<div class="text pa-4">
					<div class="title text-xlg mb-2">{{item.title}}</div>
					<div class="text-base mb-2">{{item.text}}</div>
				</div>
				<div class="img-area"><img :src="item.src" alt="home-img"></div>
			</div>
		</v-container>
	</section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.box {
  display:flex;
  flex-direction: column;
	&:nth-child(even){
		background-color: #f1f1f1;
	}

	.text {
  	width: 100%;
  	text-align: center;
		margin: auto 0;
	}
	.img-area {
		height: 20rem;
		text-align: center;
		img {
			height: 100%;
			object-fit: contain;
		}
	}
}

// pc
@media (min-width:768px) {
  .box {
    flex-direction: row;
    justify-content: space-between;

		&:nth-child(even){
			flex-direction: row-reverse;
			background-color: map-get($background, light);
			.text {
    		text-align: right;
  		}
			.img-area {
				margin-left: 0;
				margin-right: 3%;
			}
		}
		.text {
			text-align: left;
		}
		.img-area {
			text-align: center;
			margin-left: 3%;
			height: 25rem;
			img {
				height: 100%;
				object-fit: contain;
			}
		}
	}
}

</style>