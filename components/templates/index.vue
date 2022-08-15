<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
  },
  setup() {

    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-account-search',
          title: 'Job',
          to: '/job',
        },
        {
          icon: 'mdi-finance',
          title: 'Career',
          to: '/career',
        },
      ],
      title: 'Fictional Company',
    }
  },
})
</script>

<template>
  <v-row justify="center" align="center" class="top-page">
    <v-col cols="12" xs="12" sm="12" md="8" class="inner my-15 mx-20 pa-10">
      <div class="logo d-flex justify-center">
        <img src="/img/logo.png" alt="company-logo">
      </div>
      <div class="pa-4">
        <div class="title text-xxlg font-bold pb-3">
          Welcome to {{title}}!
        </div>
        <div>
          <div class="text-md pb-12">
            Since 1960, we’ve kept it simple: source the finest ingredients and transform them into the most luxurious ice cream. 
            Because we believe that luxury is found wherever you are – in moments large and small. Here’s to choosing deliciousness every single time.
          </div>
          <div class="pages">
            <v-card
              v-for="(item, i) in items"
              :key="i"
              router
              exact
            >
              <nuxt-link class="page text-md py-8 px-10" :to="item.to">
                <v-icon>{{ item.icon }}</v-icon>
                <div>{{item.title}}</div>
              </nuxt-link>
            </v-card>
          </div>
          <div class="text-md">
            References
            <ul>
              <li>
                <a
                  href="https://www.icecream.com/us/en/brands/haagen-dazs/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="haagen-dazs-us"
                >
                  haagen-dazs-us
                </a>
              </li>
              <li>
                <a
                href="https://www.haagen-dazs.co.jp/brand/"
                target="_blank"
                rel="noopener noreferrer"
                title="haagen-dazs-jp"
                >
                  haagen-dazs-jp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.top-page{

  .logo {
    width: 60%;
    margin: auto;
    img {
      width: 100%;
    }
  }

  a {
    color: map-get($accent, light);
    text-decoration: none;
  }

  .title {
    text-align: center;
    color: map-get($accent, main);
  }
  .pages {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 40px;
    text-align: center;
    .v-card {
      margin-bottom: 2rem;
      .page {
        display: flex;
        flex-direction: column;
        &:hover{
          opacity: 0.6;
        }
        i {
          font-size: 5rem;
          color: map-get($accent, main);
          &:hover{
            opacity: 0.6;
          }
        }
      }
    }
  }
}

// pc
@media (min-width:768px) {
.top-page{
  background: url("/img/background.png") repeat;
    .inner{
      background: map-get($background, main);
    }
    .pages {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .page {
        display: flex;
        flex-direction: column;
      }
    }
  }
}

</style>