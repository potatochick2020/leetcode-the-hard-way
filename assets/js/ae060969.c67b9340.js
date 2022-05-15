"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3845],{3905:function(a,t,e){e.d(t,{Zo:function(){return o},kt:function(){return k}});var n=e(7294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function m(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function r(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var i=n.createContext({}),l=function(a){var t=n.useContext(i),e=t;return a&&(e="function"==typeof a?a(t):r(r({},t),a)),e},o=function(a){var t=l(a.components);return n.createElement(i.Provider,{value:t},a.children)},c={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(e),k=s,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return e?n.createElement(h,r(r({ref:t},o),{},{components:e})):n.createElement(h,r({ref:t},o))}));function k(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var m=e.length,r=new Array(m);r[0]=N;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=e[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},200:function(a,t,e){e.r(t),e.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=e(7462),s=e(3366),m=(e(7294),e(3905)),r=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem"},i="0365 - Water and Jug Problem (Medium)",l={unversionedId:"0300-0399/water-and-jug-problem-medium",id:"0300-0399/water-and-jug-problem-medium",title:"0365 - Water and Jug Problem (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem",source:"@site/solutions/0300-0399/0365-water-and-jug-problem-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/water-and-jug-problem-medium",permalink:"/leetcode-the-hard-way/solutions/0300-0399/water-and-jug-problem-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0365-water-and-jug-problem-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:365,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem"},sidebar:"tutorialSidebar",previous:{title:"0347 - Top K Frequent Elements (Medium)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/top-k-frequent-elements-medium"},next:{title:"0367 - Valid Perfect Square (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/valid-perfect-square-easy"}},o={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: B\xe9zout&#39;s identity",id:"approach-1-b\xe9zouts-identity",level:2}],N={toc:c};function k(a){var t=a.components,e=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},N,e,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"0365---water-and-jug-problem-medium"},"0365 - Water and Jug Problem (Medium)"),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given two jugs with capacities ",(0,m.kt)("inlineCode",{parentName:"p"},"jug1Capacity")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"jug2Capacity")," liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly ",(0,m.kt)("inlineCode",{parentName:"p"},"targetCapacity")," liters using these two jugs."),(0,m.kt)("p",null,"If ",(0,m.kt)("inlineCode",{parentName:"p"},"targetCapacity")," liters of water are measurable, you must have ",(0,m.kt)("inlineCode",{parentName:"p"},"targetCapacity")," liters of water contained ",(0,m.kt)("strong",{parentName:"p"},"within one or both buckets")," by the end."),(0,m.kt)("p",null,"Operations allowed:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Fill any of the jugs with water."),(0,m.kt)("li",{parentName:"ul"},"Empty any of the jugs."),(0,m.kt)("li",{parentName:"ul"},"Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty."," ")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4\nOutput: true\nExplanation: The famous Die Hard example \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5\nOutput: false\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 3:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3\nOutput: true \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10^6"))),(0,m.kt)("h2",{id:"approach-1-b\xe9zouts-identity"},"Approach 1: B\xe9zout's identity"),(0,m.kt)("p",null,"It's obvious that it is impossible to measure if the target capacity ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"z")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"))))),"is greater than the total capacity of jug ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and jug ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),". Otherwise, we can express it as a linear combination of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," and check if ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"z")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," is a linear combination of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),". In order to do so, ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"z")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," has to be a multiple of the gcd of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"y")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),"."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool canMeasureWater(int x, int y, int z) {\n        // impossible case\n        if (x + y < z) return false;\n        // check if z is a multiple of GCD(x, y) \n        return z % gcd(x, y) == 0;\n    }\n};\n")))}k.isMDXComponent=!0}}]);