"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4414],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/k-divisible-elements-subarrays/"},l="2261 - K Divisible Elements Subarrays (Medium)",u={unversionedId:"2200-2299/k-divisible-elements-subarrays-medium",id:"2200-2299/k-divisible-elements-subarrays-medium",title:"2261 - K Divisible Elements Subarrays (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/k-divisible-elements-subarrays/",source:"@site/solutions/2200-2299/2261-k-divisible-elements-subarrays-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/k-divisible-elements-subarrays-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/k-divisible-elements-subarrays-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2261-k-divisible-elements-subarrays-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2261,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/k-divisible-elements-subarrays/"},sidebar:"tutorialSidebar",previous:{title:"2260 - Minimum Consecutive Cards to Pick Up (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-consecutive-cards-to-pick-up-medium"},next:{title:"2262 - Total Appeal of A String (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/total-appeal-of-a-string-hard"}},p={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2261---k-divisible-elements-subarrays-medium"},"2261 - K Divisible Elements Subarrays (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and two integers ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", return ",(0,i.kt)("em",{parentName:"p"},"the number of ",(0,i.kt)("strong",{parentName:"em"},"distinct subarrays")," which have ",(0,i.kt)("strong",{parentName:"em"},"at most"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," ",(0,i.kt)("em",{parentName:"p"},"elements divisible by")," ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,i.kt)("p",null,"Two arrays ",(0,i.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nums2")," are said to be ",(0,i.kt)("strong",{parentName:"p"},"distinct")," if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They are of ",(0,i.kt)("strong",{parentName:"li"},"different")," lengths, or"),(0,i.kt)("li",{parentName:"ul"},"There exists ",(0,i.kt)("strong",{parentName:"li"},"at least")," one index ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"nums1[i] != nums2[i]"),".")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"subarray")," is defined as a ",(0,i.kt)("strong",{parentName:"p"},"non-empty")," contiguous sequence of elements in an array."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,3,3,2,2], k = 2, p = 2\nOutput: 11\nExplanation:\nThe elements at indices 0, 3, and 4 are divisible by p = 2.\nThe 11 distinct subarrays which have at most k = 2 elements divisible by 2 are:\n[2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2].\nNote that the subarrays [2] and [3] occur more than once in nums, but they should each be counted only once.\nThe subarray [2,3,3,2,2] should not be counted because it has 3 elements that are divisible by 2.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4], k = 4, p = 1\nOutput: 10\nExplanation:\nAll element of nums are divisible by p = 1.\nAlso, every subarray of nums will have at most 4 elements that are divisible by 1.\nSince all subarrays are distinct, the total number of subarrays satisfying all the constraints is 10. \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 200")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums[i], p <= 200")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= nums.length"))),(0,i.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,i.kt)("p",null,"Build all subarrays and insert them to set. The answer would be the size of the set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    int countDistinct(vector<int>& nums, int k, int p) {\n        int ans = 0, n = nums.size();\n        set<string> s;\n        for (int i = 0; i < n; i++) {\n            int cnt = 0;\n            string t;\n            for (int j = i; j < n; j++) {\n                // below line will cause TLE\n                // cnt += nums[j] % p == 0;\n                // use below instead\n                cnt += nums[j] % p == 0 ? 1 : 0;\n                // or \n                // if (nums[j] % p == 0) cnt += 1;\n                if (cnt <= k) {\n                    t = t + to_string(nums[j]) + "|";\n                    s.insert(t);\n                } else {\n                    break;\n                }\n            }\n        }\n        return (int) s.size();\n    }\n};\n')))}d.isMDXComponent=!0}}]);