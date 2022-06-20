import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas);
library.add(fab);
library.add(far);

import { dom } from "@fortawesome/fontawesome-svg-core"
dom.watch()

import { createApp } from 'vue'

import RadarView from './RadarView.vue'
// import ListView from './CompanyList.vue'

let app 
app = createApp(RadarView)
// app = createApp(ListView)

app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
