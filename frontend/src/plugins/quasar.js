import { Quasar, QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QPageContainer, QPage, QSpace, QBar, QIcon, QMenu, QList, QItem, QItemSection, QSeparator, QScrollArea, QToggle, QInput, QDate, QPopupProxy, QCard, QAvatar } from 'quasar'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import langPtBr from 'quasar/lang/pt-BR'

export default {
  install(app) {
    app.use(Quasar, {
      lang: langPtBr,
      components: {
        QBtn,
        QLayout,
        QHeader,
        QToolbar,
        QToolbarTitle,
        QPageContainer,
        QPage,
        QSpace,
        QBar,
        QIcon,
        QMenu,
        QList,
        QItem,
        QItemSection,
        QSeparator,
        QScrollArea,
        QToggle,
        QInput,
        QDate,
        QPopupProxy,
        QCard,
        QAvatar,
      }
    })
  }
}