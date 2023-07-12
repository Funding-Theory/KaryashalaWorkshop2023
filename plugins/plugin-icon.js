import Vue from 'vue'
import { Icon } from '@iconify/vue2'
import eyeIcon from '@iconify/icons-tabler/eye'
import chevronUp from '@iconify/icons-tabler/chevron-up'
import chevronDown from '@iconify/icons-tabler/chevron-down'
import chevronLeft from '@iconify/icons-tabler/chevron-left'
import chevronRight from '@iconify/icons-tabler/chevron-right'
import menu2 from '@iconify/icons-tabler/menu-2'
import razorpayIcon from '@iconify/icons-simple-icons/razorpay'
import xIcon from '@iconify/icons-tabler/x'
import starIcon from '@iconify/icons-tabler/star'
import heartIcon from '@iconify/icons-tabler/heart'
import thumbUp from '@iconify/icons-tabler/thumb-up'
import thumbDown from '@iconify/icons-tabler/thumb-down'
import starFilled from '@iconify/icons-tabler/star-filled'
import heartFilled from '@iconify/icons-tabler/heart-filled'
import cloudUpload from '@iconify/icons-tabler/cloud-upload'
import shoppingCart from '@iconify/icons-material-symbols/shopping-cart'
import fullscreenRounded from '@iconify/icons-material-symbols/fullscreen-rounded'
import rateReviewOutline from '@iconify/icons-material-symbols/rate-review-outline'
import verifiedUserRounded from '@iconify/icons-material-symbols/verified-user-rounded'
import descriptionIcon from '@iconify/icons-material-symbols/description'
import chemistIcon from '@iconify/icons-mdi/chemist'
import roundFollowTheSigns from '@iconify/icons-ic/round-follow-the-signs'
import zoomIn from '@iconify/icons-tabler/zoom-in'
import mapPinFilled from '@iconify/icons-tabler/map-pin-filled'
import boltIcon from '@iconify/icons-tabler/bolt'
import bellFilled from '@iconify/icons-tabler/bell-filled'
import mapPin from '@iconify/icons-tabler/map-pin'
import searchIcon from '@iconify/icons-tabler/search'
import coinVerticalDuotone from '@iconify/icons-ph/coin-vertical-duotone'
import trashIcon from '@iconify/icons-tabler/trash'
import minusIcon from '@iconify/icons-tabler/minus'
import plusIcon from '@iconify/icons-tabler/plus'
import arrowRight from '@iconify/icons-tabler/arrow-right'
import userIcon from '@iconify/icons-tabler/user'
import bagCheckBold from '@iconify/icons-solar/bag-check-bold'
import calendarPlus from '@iconify/icons-tabler/calendar-plus'
import logoutIcon from '@iconify/icons-tabler/logout'
import shareIcon from '@iconify/icons-tabler/share'
import circleXFilled from '@iconify/icons-tabler/circle-x-filled'
import circleCheckFilled from '@iconify/icons-tabler/circle-check-filled'
import currentLocation from '@iconify/icons-tabler/current-location'
import circle from '@iconify/icons-tabler/circle'
import discount2 from '@iconify/icons-tabler/discount-2'
import coinRupee from '@iconify/icons-tabler/coin-rupee'
import basketFilled from '@iconify/icons-tabler/basket-filled'
import addressBook from '@iconify/icons-tabler/address-book'
import phoneIcon from '@iconify/icons-tabler/phone'

Vue.component('Icon', { extends: Icon, inheritAttrs: false })

export default ({ app }, inject) => {
  inject('icon', {
    menu2: menu2,
    phoneIcon: phoneIcon,
    addressBook: addressBook,
    basketFilled: basketFilled,
    coinRupee: coinRupee,
    circle: circle,
    discount2: discount2,
    razorpayIcon: razorpayIcon,
    userIcon: userIcon,
    shareIcon: shareIcon,
    bagCheckBold: bagCheckBold,
    calendarPlus: calendarPlus,
    logoutIcon: logoutIcon,
    minusIcon: minusIcon,
    plusIcon: plusIcon,
    chevronLeft: chevronLeft,
    chevronRight: chevronRight,
    xIcon: xIcon,
    arrowRight: arrowRight,
    mapPin: mapPin,
    zoomIn: zoomIn,
    eyeIcon: eyeIcon,
    thumbUp: thumbUp,
    trashIcon: trashIcon,
    searchIcon: searchIcon,
    currentLocation: currentLocation,
    starIcon: starIcon,
    chevronUp: chevronUp,
    thumbDown: thumbDown,
    heartIcon: heartIcon,
    starFilled: starFilled,
    cloudUpload: cloudUpload,
    heartFilled: heartFilled,
    chevronDown: chevronDown,
    shoppingCart: shoppingCart,
    fullscreenRounded: fullscreenRounded,
    rateReviewOutline: rateReviewOutline,
    verifiedUserRounded: verifiedUserRounded,
    descriptionIcon: descriptionIcon,
    chemistIcon: chemistIcon,
    mapPinFilled: mapPinFilled,
    boltIcon: boltIcon,
    bellFilled: bellFilled,
    circleXFilled: circleXFilled,
    circleCheckFilled: circleCheckFilled,
    roundFollowTheSigns: roundFollowTheSigns,
    coinVerticalDuotone: coinVerticalDuotone,
  })
}
