"use strict";(self.webpackChunkweeklyatelier=self.webpackChunkweeklyatelier||[]).push([[610],{9703:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(5999),l=a(2244);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(9460),l=a(390);function i(e){var t=e.items,a=e.component,i=void 0===a?l.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(i,null,n.createElement(t,null)))})))}},1714:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(4334),l=a(5999),i=a(8824),s=a(1944),o=a(5281),g=a(9960),c=a(9058),u=a(9703),m=a(197),p=a(9985);function d(e){var t,a=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function h(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:t}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function b(e){var t=e.tag,a=e.items,r=e.sidebar,i=e.listMetadata,s=d(t);return n.createElement(c.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(g.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(u.Z,{metadata:i}))}function E(e){return n.createElement(s.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);