/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// const { default: Example } = require(\"./scripts/example\");\nconst {\n  default: RaceRender\n} = __webpack_require__(/*! ./scripts/raceRender */ \"./src/scripts/raceRender.js\");\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const main = document.getElementById(\"main\");\n//   new Example(main);\n//   // console.log(\"hello world\");\n// });\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const raceTab = document.getElementById(\"race-tab\");\n  raceTab.addEventListener('click', renderRaceInfo);\n});\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const raceName = document.getElementById(\"race\")\n// })\n\nconst renderRaceInfo = async () => {\n  const response = await fetch(\"https://api.open5e.com/races/?document__slug__not_in=toh\");\n  if (response.ok) {\n    const data = await response.json();\n    console.log(data);\n    new RaceRender(data);\n  }\n};\nwindow.renderRaceInfo = renderRaceInfo;\nconst renderClassInfo = async () => {\n  const response = await fetch(\"https://api.open5e.com/classes/\");\n  if (response.ok) {\n    const data = await response.json();\n    console.log(data);\n  }\n};\nwindow.renderClassInfo = renderClassInfo;\nconst renderBackgroundInfo = async () => {\n  const response = await fetch(\"https://api.open5e.com/backgrounds/?document__slug__in=a5e\");\n  if (response.ok) {\n    const data = await response.json();\n    console.log(data);\n  }\n};\nwindow.renderBackgroundInfo = renderBackgroundInfo;\n\n// const renderFeatInfo = async () => {\n//   const response = await fetch (\"\");\n//   if (response.ok) {\n//     const data = await response.json();\n//     console.log(data);\n//   }\n// };\n\n// window.renderFeatInfo =  renderFeatInfo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNO0VBQUVBLE9BQU8sRUFBRUM7QUFBVSxDQUFDLEdBQUdDLG1CQUFPLENBQUMseURBQXNCLENBQUM7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ2xERCxPQUFPLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRUcsY0FBYyxDQUFDO0FBQ3BELENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQUFBLENBQUEsS0FBWTtFQUNqQyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLDBEQUEwRCxDQUFDO0VBQ3pGLElBQUlELFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO0lBQ2YsTUFBTUMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7SUFDakIsSUFBSVYsVUFBVSxDQUFDVSxJQUFJLENBQUM7RUFDdEI7QUFDRixDQUFDO0FBRURJLE1BQU0sQ0FBQ1IsY0FBYyxHQUFHQSxjQUFjO0FBRXRDLE1BQU1TLGVBQWUsR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDbEMsTUFBTVIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxpQ0FBaUMsQ0FBQztFQUNoRSxJQUFJRCxRQUFRLENBQUNFLEVBQUUsRUFBRTtJQUNmLE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0VBRW5CO0FBQ0YsQ0FBQztBQUVESSxNQUFNLENBQUNDLGVBQWUsR0FBR0EsZUFBZTtBQUV4QyxNQUFNQyxvQkFBb0IsR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDdkMsTUFBTVQsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSw0REFBNEQsQ0FBQztFQUMzRixJQUFJRCxRQUFRLENBQUNFLEVBQUUsRUFBRTtJQUNmLE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0VBQ25CO0FBQ0YsQ0FBQztBQUVESSxNQUFNLENBQUNFLG9CQUFvQixHQUFJQSxvQkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNWUtcGxheWVyLXRvb2xraXQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IGRlZmF1bHQ6IEV4YW1wbGUgfSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZXhhbXBsZVwiKTtcbmNvbnN0IHsgZGVmYXVsdDogUmFjZVJlbmRlcn0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL3JhY2VSZW5kZXJcIik7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgbmV3IEV4YW1wbGUobWFpbik7XG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4vLyB9KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0IGNvbnN0IHJhY2VUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhY2UtdGFiXCIpO1xuICAgcmFjZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclJhY2VJbmZvKTtcbn0pO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGNvbnN0IHJhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYWNlXCIpXG4vLyB9KVxuXG5jb25zdCByZW5kZXJSYWNlSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoXCJodHRwczovL2FwaS5vcGVuNWUuY29tL3JhY2VzLz9kb2N1bWVudF9fc2x1Z19fbm90X2luPXRvaFwiKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBuZXcgUmFjZVJlbmRlcihkYXRhKTtcbiAgfVxufTtcblxud2luZG93LnJlbmRlclJhY2VJbmZvID0gcmVuZGVyUmFjZUluZm87XG5cbmNvbnN0IHJlbmRlckNsYXNzSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoXCJodHRwczovL2FwaS5vcGVuNWUuY29tL2NsYXNzZXMvXCIpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICB9XG59O1xuXG53aW5kb3cucmVuZGVyQ2xhc3NJbmZvID0gcmVuZGVyQ2xhc3NJbmZvO1xuXG5jb25zdCByZW5kZXJCYWNrZ3JvdW5kSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoXCJodHRwczovL2FwaS5vcGVuNWUuY29tL2JhY2tncm91bmRzLz9kb2N1bWVudF9fc2x1Z19faW49YTVlXCIpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG59O1xuXG53aW5kb3cucmVuZGVyQmFja2dyb3VuZEluZm8gPSAgcmVuZGVyQmFja2dyb3VuZEluZm87XG5cbi8vIGNvbnN0IHJlbmRlckZlYXRJbmZvID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoIChcIlwiKTtcbi8vICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gd2luZG93LnJlbmRlckZlYXRJbmZvID0gIHJlbmRlckZlYXRJbmZvOyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiUmFjZVJlbmRlciIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyYWNlVGFiIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXJSYWNlSW5mbyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInJlbmRlckNsYXNzSW5mbyIsInJlbmRlckJhY2tncm91bmRJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/raceRender.js":
/*!***********************************!*\
  !*** ./src/scripts/raceRender.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass RaceRender {\n  constructor(data) {\n    this.data = data;\n    this.populateRaceDOM(data);\n  }\n  populateRaceDOM(data) {\n    const raceList = document.getElementById('raceList');\n    const list = document.createElement('ul');\n    // const raceData = Array.from(data)\n\n    data.results.forEach(race => {\n      const raceEle = document.createElement('li');\n      raceEle.textContent = race.name;\n      raceEle.addEventListener('click', ev => {\n        renderRaceDesc(ev, race);\n      });\n      list.appendChild(raceEle);\n    });\n\n    // raceList.innerHTML = '';\n    raceList.appendChild(list);\n  }\n}\nconst renderRaceDesc = (ev, race) => {\n  const raceInfo = document.getElementById('raceInfo');\n  const list = document.createElement('ul');\n  const targetInfo = [race.desc, race.size_raw, race.size, race.traits, race.vision];\n\n  // unecessary\n  targetInfo.forEach(info => {\n    const raceStats = document.createElement('li');\n    raceStats.textContent = info;\n    list.appendChild(raceStats);\n  });\n  console.log(raceInfo);\n\n  // raceInfo.innerHTML = '';\n  raceInfo.appendChild(list);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RaceRender);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yYWNlUmVuZGVyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVO0VBQ2RDLFdBQVdBLENBQUNDLElBQUksRUFBRTtJQUNoQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDO0VBQzVCO0VBRUFDLGVBQWVBLENBQUNELElBQUksRUFBQztJQUNwQixNQUFNRSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNuRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLElBQUksQ0FBQztJQUMzQzs7SUFFRU4sSUFBSSxDQUFDTyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO01BQzNCLE1BQU1DLE9BQU8sR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsSUFBSSxDQUFDO01BQzVDSSxPQUFPLENBQUNDLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxJQUFJO01BQ2xDRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsRUFBRSxJQUFJO1FBQ3ZDQyxjQUFjLENBQUNELEVBQUUsRUFBRUwsSUFBSSxDQUFDO01BQ3pCLENBQUMsQ0FBQztNQUNDSixJQUFJLENBQUNXLFdBQVcsQ0FBQ04sT0FBTyxDQUFDO0lBQzNCLENBQUMsQ0FBQzs7SUFFSjtJQUNFUixRQUFRLENBQUNjLFdBQVcsQ0FBQ1gsSUFBSSxDQUFDO0VBQzVCO0FBQ0Y7QUFFQSxNQUFNVSxjQUFjLEdBQUlBLENBQUNELEVBQUUsRUFBRUwsSUFBSSxLQUFLO0VBQ3BDLE1BQU1RLFFBQVEsR0FBR2QsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ3BELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3pDLE1BQU1ZLFVBQVUsR0FBRyxDQUFDVCxJQUFJLENBQUNVLElBQUksRUFBRVYsSUFBSSxDQUFDVyxRQUFRLEVBQUVYLElBQUksQ0FBQ1ksSUFBSSxFQUFFWixJQUFJLENBQUNhLE1BQU0sRUFBRWIsSUFBSSxDQUFDYyxNQUFNLENBQUM7O0VBRWxGO0VBQ0FMLFVBQVUsQ0FBQ1YsT0FBTyxDQUFDZ0IsSUFBSSxJQUFJO0lBQ3pCLE1BQU1DLFNBQVMsR0FBR3RCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLElBQUksQ0FBQztJQUM5Q21CLFNBQVMsQ0FBQ2QsV0FBVyxHQUFHYSxJQUFJO0lBQzVCbkIsSUFBSSxDQUFDVyxXQUFXLENBQUNTLFNBQVMsQ0FBQztFQUM3QixDQUFDLENBQUM7RUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFFBQVEsQ0FBQzs7RUFFckI7RUFDQUEsUUFBUSxDQUFDRCxXQUFXLENBQUNYLElBQUksQ0FBQztBQUU1QixDQUFDO0FBS0QsK0RBQWVQLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81ZS1wbGF5ZXItdG9vbGtpdC8uL3NyYy9zY3JpcHRzL3JhY2VSZW5kZXIuanM/MTNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSYWNlUmVuZGVye1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0ICB0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdCAgdGhpcy5wb3B1bGF0ZVJhY2VET00oZGF0YSk7XG4gIH1cblxuICBwb3B1bGF0ZVJhY2VET00oZGF0YSl7XG5cdCAgY29uc3QgcmFjZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFjZUxpc3QnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0XHQvLyBjb25zdCByYWNlRGF0YSA9IEFycmF5LmZyb20oZGF0YSlcblxuICAgIGRhdGEucmVzdWx0cy5mb3JFYWNoKHJhY2UgPT4ge1xuICAgICAgY29uc3QgcmFjZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICByYWNlRWxlLnRleHRDb250ZW50ID0gcmFjZS5uYW1lO1xuXHRcdFx0cmFjZUVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcblx0XHRcdFx0cmVuZGVyUmFjZURlc2MoZXYsIHJhY2UpO1xuXHRcdFx0fSk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKHJhY2VFbGUpO1xuICAgIH0pO1xuXG5cdFx0Ly8gcmFjZUxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcmFjZUxpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XG4gIH07XG59XG5cbmNvbnN0IHJlbmRlclJhY2VEZXNjID0gIChldiwgcmFjZSkgPT4ge1xuICBjb25zdCByYWNlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWNlSW5mbycpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgdGFyZ2V0SW5mbyA9IFtyYWNlLmRlc2MsIHJhY2Uuc2l6ZV9yYXcsIHJhY2Uuc2l6ZSwgcmFjZS50cmFpdHMsIHJhY2UudmlzaW9uXTtcblxuICAvLyB1bmVjZXNzYXJ5XG4gIHRhcmdldEluZm8uZm9yRWFjaChpbmZvID0+IHtcbiAgICBjb25zdCByYWNlU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHJhY2VTdGF0cy50ZXh0Q29udGVudCA9IGluZm87XG4gICAgbGlzdC5hcHBlbmRDaGlsZChyYWNlU3RhdHMpO1xuICB9KTtcbiAgY29uc29sZS5sb2cocmFjZUluZm8pO1xuXG4gIC8vIHJhY2VJbmZvLmlubmVySFRNTCA9ICcnO1xuICByYWNlSW5mby5hcHBlbmRDaGlsZChsaXN0KTtcblxufTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUmFjZVJlbmRlcjsiXSwibmFtZXMiOlsiUmFjZVJlbmRlciIsImNvbnN0cnVjdG9yIiwiZGF0YSIsInBvcHVsYXRlUmFjZURPTSIsInJhY2VMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxpc3QiLCJjcmVhdGVFbGVtZW50IiwicmVzdWx0cyIsImZvckVhY2giLCJyYWNlIiwicmFjZUVsZSIsInRleHRDb250ZW50IiwibmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInJlbmRlclJhY2VEZXNjIiwiYXBwZW5kQ2hpbGQiLCJyYWNlSW5mbyIsInRhcmdldEluZm8iLCJkZXNjIiwic2l6ZV9yYXciLCJzaXplIiwidHJhaXRzIiwidmlzaW9uIiwiaW5mbyIsInJhY2VTdGF0cyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/raceRender.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81ZS1wbGF5ZXItdG9vbGtpdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;