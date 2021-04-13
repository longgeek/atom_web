import Vue from 'vue';
import marked from 'marked';

/**
 * limitTo
 * limitTo string
 */
Vue.filter( "limitTo", function (str, index) {
    if (!str) { return; }
    return str.slice(0, index);
})

/**
 * toMarkDown
 * convert string to the markdown format
 */
Vue.filter("toMarkDown", function (content) {
    if (!content) { return; }
    return marked(content);
})
