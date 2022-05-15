"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1188],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"},c="2226 - Maximum Candies Allocated to K Children (Medium)",d={unversionedId:"2100-2199/maximum-candies-allocated-to-k-children-medium",id:"2100-2199/maximum-candies-allocated-to-k-children-medium",title:"2226 - Maximum Candies Allocated to K Children (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-candies-allocated-to-k-children/",source:"@site/solutions/2100-2199/2226-maximum-candies-allocated-to-k-children-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/maximum-candies-allocated-to-k-children-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-candies-allocated-to-k-children-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2226-maximum-candies-allocated-to-k-children-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2226,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"},sidebar:"tutorialSidebar",previous:{title:"2225 - Find Players With Zero or One Losses (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-players-with-zero-or-one-losses-medium"},next:{title:"2227 - Encrypt and Decrypt Strings (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/encrypt-and-decrypt-strings-hard"}},s={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2226---maximum-candies-allocated-to-k-children-medium"},"2226 - Maximum Candies Allocated to K Children (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"candies"),". Each element in the array denotes a pile of candies of size ",(0,i.kt)("inlineCode",{parentName:"p"},"candies[i]"),". You can divide each pile into any number of ",(0,i.kt)("strong",{parentName:"p"},"sub piles"),", but you ",(0,i.kt)("strong",{parentName:"p"},"cannot")," merge two piles together."),(0,i.kt)("p",null,"You are also given an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),". You should allocate piles of candies to ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," children such that each child gets the ",(0,i.kt)("strong",{parentName:"p"},"same")," number of candies. Each child can take ",(0,i.kt)("strong",{parentName:"p"},"at most one")," pile of candies and some piles of candies may go unused."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"maximum number of candies")," each child can get.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: candies = [5,8,6], k = 3\nOutput: 5\nExplanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: candies = [2,5], k = 11\nOutput: 0\nExplanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= candies.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= candies[i] <= 10^7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= 10^12"))),(0,i.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,i.kt)("p",null,"We can use binary search to find out the maximum number of candies in a single pile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumCandies(vector<int>& candies, long long k) {\n        long long l = 0, r = 1e12;\n        while (l < r) {\n            // tips: + 1 here is required to find the max valid element\n            long long m = l + (r - l + 1) / 2, cnt = 0;\n            // if each child get m candies, \n            // is it possible to allocate to k children?\n            for (auto x : candies) cnt += x / m;\n            // m is too large\n            if (cnt < k) r = m - 1;\n            // m is too small\n            else l = m;\n        }\n        return l;\n    }\n};\n")))}u.isMDXComponent=!0}}]);