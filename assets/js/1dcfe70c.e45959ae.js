"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2269],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/first-bad-version/"},l="0278 - First Bad Version (Easy)",p={unversionedId:"0200-0299/first-bad-version-easy",id:"0200-0299/first-bad-version-easy",title:"0278 - First Bad Version (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/first-bad-version/",source:"@site/solutions/0200-0299/0278-first-bad-version-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/first-bad-version-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/first-bad-version-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0200-0299/0278-first-bad-version-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652449861,formattedLastUpdatedAt:"5/13/2022",sidebarPosition:278,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/first-bad-version/"},sidebar:"tutorialSidebar",previous:{title:"0261 -Graph Valid Tree (Medium)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/graph-valid-tree-medium"},next:{title:"0283 - Move Zeroes (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/move-zeroes-easy"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0278---first-bad-version-easy"},"0278 - First Bad Version (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad."),(0,o.kt)("p",null,"Suppose you have ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," versions ",(0,o.kt)("inlineCode",{parentName:"p"},"[1, 2, ..., n]")," and you want to find out the first bad one, which causes all the following ones to be bad."),(0,o.kt)("p",null,"You are given an API ",(0,o.kt)("inlineCode",{parentName:"p"},"bool isBadVersion(version)")," which returns whether ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, bad = 4\nOutput: 4\nExplanation:\ncall isBadVersion(3) -> false\ncall isBadVersion(5) -> true\ncall isBadVersion(4) -> true\nThen 4 is the first bad version.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 1, bad = 1\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= bad <= n <= 2^31 - 1"))),(0,o.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,o.kt)("p",null,"Prerequisite: ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);\n\nclass Solution {\npublic:\n    int firstBadVersion(int n) {\n        // init possible range\n        int l = 1, r = n;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            // [F,F,..,F,T,T,T,..,T]\n            // exclude m\n            if (!isBadVersion(m)) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}m.isMDXComponent=!0}}]);