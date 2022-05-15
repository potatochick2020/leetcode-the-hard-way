"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8585],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={description:"Author: @wingkwong | https://leetcode.com/problems/flood-fill/"},p="0733 - Flood Fill (Easy)",s={unversionedId:"0700-0799/flood-fill-easy",id:"0700-0799/flood-fill-easy",title:"0733 - Flood Fill (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/flood-fill/",source:"@site/solutions/0700-0799/0733-flood-fill-easy.md",sourceDirName:"0700-0799",slug:"/0700-0799/flood-fill-easy",permalink:"/leetcode-the-hard-way/solutions/0700-0799/flood-fill-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0700-0799/0733-flood-fill-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:733,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/flood-fill/"},sidebar:"tutorialSidebar",previous:{title:"0704 - Binary Search (Easy)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/binary-search-easy"},next:{title:"0740 - Delete and Earn (Medium)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/delete-and-earn-medium"}},c={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2},{value:"Python 3",id:"python-3",level:3},{value:"Approach 2: BFS",id:"approach-2-bfs",level:2},{value:"C++",id:"c",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0733---flood-fill-easy"},"0733 - Flood Fill (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"An image is represented by an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," integer grid ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"image[i][j]")," represents the pixel value of the image."),(0,i.kt)("p",null,"You are also given three integers ",(0,i.kt)("inlineCode",{parentName:"p"},"sr"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sc"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"newColor"),". You should perform a ",(0,i.kt)("strong",{parentName:"p"},"flood fill")," on the image starting from the pixel ",(0,i.kt)("inlineCode",{parentName:"p"},"image[sr][sc]"),"."),(0,i.kt)("p",null,"To perform a ",(0,i.kt)("strong",{parentName:"p"},"flood fill"),", consider the starting pixel, plus any pixels connected ",(0,i.kt)("strong",{parentName:"p"},"4-directionally")," to the starting pixel of the same color as the starting pixel, plus any pixels connected ",(0,i.kt)("strong",{parentName:"p"},"4-directionally")," to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with ",(0,i.kt)("inlineCode",{parentName:"p"},"newColor"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the modified image after performing the flood fill"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2\nOutput: [[2,2,2],[2,2,0],[2,0,1]]\nExplanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.\nNote the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2\nOutput: [[2,2,2],[2,2,2]] \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m == image.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == image[i].length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 50")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= image[i][j], newColor < 2^16")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= sr < m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= sc < n"))),(0,i.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,i.kt)("p",null,"First we check if the color at the starting point is same as the target one. If so, we return the input directly. Otherwise, we perform dfs from the starting point to replace the color and do the same thing for four directions. We only perform dfs when the next pixel is within the boundary."),(0,i.kt)("h3",{id:"python-3"},"Python 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:\n        R, C = len(image), len(image[0])\n        color = image[sr][sc]\n        # check if the color is same as the target one\n        # if so, return input directly\n        if color == newColor: return image\n        # dfs function\n        def dfs(r, c):\n            # check if it is same as the original color\n            if image[r][c] == color:\n                # paint it\n                image[r][c] = newColor\n                # check 4 directions\n                # perform dfs only if the next pixel is within boundary\n                if r > 0: dfs(r - 1, c)\n                if r < R - 1: dfs(r + 1, c)\n                if c > 0: dfs(r, c - 1)\n                if c < C - 1: dfs(r, c + 1)\n        # perform flood fill from the starting point\n        dfs(sr, sc)\n        return image\n")),(0,i.kt)("h2",{id:"approach-2-bfs"},"Approach 2: BFS"),(0,i.kt)("p",null,"Similar idea but in BFS way. Use queue to store the points and search for 4 directions to replace if possible."),(0,i.kt)("h3",{id:"c"},"C++"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int dirx[4] = { -1, 0, 0, 1};\n    int diry[4] = { 0, 1, -1, 0};\n\n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {\n        int oriColor = image[sr][sc];\n        if (oriColor == newColor) return image;\n        int n = image.size(), m = image[0].size();\n        queue<pair<int, int>> q;\n        q.push({sr, sc});\n        while(!q.empty()) {\n            auto [x, y] = q.front();\n            q.pop();\n            image[x][y] = newColor;\n            for(int i = 0; i < 4; i++) {\n                int next_x = x + dirx[i];\n                int next_y = y + diry[i];\n                if(next_x < 0 || next_y < 0 || next_x > n - 1 || next_y > m - 1 || image[next_x][next_y] != oriColor) continue;\n                image[next_x][next_y] = newColor;\n                q.push({next_x, next_y});\n            }\n        }\n        return image;\n    }\n};\n")))}u.isMDXComponent=!0}}]);