/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_code */ \"./src/scripts/main_code.js\");\n\n\nconst projects = { \"Hello!\": [] };\nlet currentProject = \"Hello!\";\n\nfunction renderProject() {\n    const projectList = document.querySelector(\"#project-list\");\n    const projectSelect = document.querySelector(\"#task-project\");\n\n    projectList.innerHTML = \"\";\n    projectSelect.innerHTML = \"\";\n\n    Object.keys(projects).forEach((projectName) => {\n        const li = document.createElement(\"li\");\n        li.textContent = projectName;\n        if (projectName === currentProject) li.style.fontWight = \"bold\";\n\n        li.addEventListener(\"click\", () => {\n            currentProject = projectName;\n            renderTask();\n            renderProject();\n        });\n\n        projectList.appendChild(li);\n\n        const option = document.createElement(\"option\");\n        option.value = projectName;\n        option.textContent = projectName;\n        projectSelect.appendChild(option);\n    });\n}\n\nfunction renderTask() {\n    const list = document.querySelector(\"#todo-list\");\n    list.innerHTML = \"\";\n\n    projects[currentProject].forEach((todo, index) => {\n        const li = document.createElement(\"li\");\n        li.innerHTML = `\n                <strong>${todo.title}</strong>\n                <p>${todo.description || \"No description\"}</p>\n                <p>Deadline: ${todo.dueDate || \"Unknown\"}</p>\n                <p>Priority: ${todo.priority || \"Low\"}</p>\n                <p>Creation Date: ${todo.createdAt}</p>\n            `;\n\n        if (todo.completed) li.classList.add(\"completed\");\n\n        li.addEventListener(\"click\", () => {\n            todo.toggleComplete();\n            renderTask();\n        });\n\n        const deleteBtn = document.createElement(\"button\");\n        deleteBtn.textContent = \"❌\";\n        deleteBtn.addEventListener(\"click\", (e) => {\n            e.stopPropagation();\n            projects[currentProject].splice(index, 1);\n            renderTask();\n        });\n\n        li.appendChild(deleteBtn);\n        list.appendChild(li);\n    });\n}\n\nconst projectAdder = document.querySelector(\"#add-project\");\nprojectAdder.addEventListener(\"click\", () => {\n    const projectName = document.querySelector(\"#new-project-name\").value.trim();\n    if (projectName && !projects[projectName]) {\n        projects[projectName] = [];\n        document.querySelector(\"#new-project-name\").value = \"\";\n        renderProject();\n    }\n});\n\nconst taskAdder = document.querySelector(\"#add-task\");\ntaskAdder.addEventListener(\"click\", () => {\n    const title = document.querySelector(\"#task-name\").value.trim();\n    const description = document.querySelector(\"#task-desc\").value.trim();\n    const dueDate = document.querySelector(\"#task-date\").value\n    const priority = document.querySelector(\"#task-priority\").value\n    const project = document.querySelector(\"#task-project\").value\n\n    if (title) {\n        projects[project].push((0,_main_code__WEBPACK_IMPORTED_MODULE_0__.createToDo)(title, description, dueDate, priority, project));\n        document.querySelector(\"#task-name\").value = \"\";\n        document.querySelector(\"#task-desc\").value = \"\";\n        document.querySelector(\"#task-date\").value = \"\";\n        renderTask();\n    }\n});\n\nrenderProject();\nrenderTask();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOztBQUF5Qzs7QUFFekMsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckMscUJBQXFCLHFDQUFxQztBQUMxRCwrQkFBK0IsMEJBQTBCO0FBQ3pELCtCQUErQix1QkFBdUI7QUFDdEQsb0NBQW9DLGVBQWU7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0RBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzPzE1OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVG9EbyB9IGZyb20gXCIuL21haW5fY29kZVwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IHsgXCJIZWxsbyFcIjogW10gfTtcbmxldCBjdXJyZW50UHJvamVjdCA9IFwiSGVsbG8hXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIik7XG5cbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIE9iamVjdC5rZXlzKHByb2plY3RzKS5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBjdXJyZW50UHJvamVjdCkgbGkuc3R5bGUuZm9udFdpZ2h0ID0gXCJib2xkXCI7XG5cbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICByZW5kZXJUYXNrKCk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzaygpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3RcIik7XG4gICAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RvZG8udGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHA+JHt0b2RvLmRlc2NyaXB0aW9uIHx8IFwiTm8gZGVzY3JpcHRpb25cIn08L3A+XG4gICAgICAgICAgICAgICAgPHA+RGVhZGxpbmU6ICR7dG9kby5kdWVEYXRlIHx8IFwiVW5rbm93blwifTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Qcmlvcml0eTogJHt0b2RvLnByaW9yaXR5IHx8IFwiTG93XCJ9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkNyZWF0aW9uIERhdGU6ICR7dG9kby5jcmVhdGVkQXR9PC9wPlxuICAgICAgICAgICAgYDtcblxuICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQpIGxpLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG8udG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCLinYxcIjtcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmVuZGVyVGFzaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbn1cblxuY29uc3QgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcbnByb2plY3RBZGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLnZhbHVlLnRyaW0oKTtcbiAgICBpZiAocHJvamVjdE5hbWUgJiYgIXByb2plY3RzW3Byb2plY3ROYW1lXSkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0TmFtZV0gPSBbXTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgcmVuZGVyUHJvamVjdCgpO1xuICAgIH1cbn0pO1xuXG5jb25zdCB0YXNrQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrXCIpO1xudGFza0FkZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIikudmFsdWVcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIikudmFsdWVcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICByZW5kZXJUYXNrKCk7XG4gICAgfVxufSk7XG5cbnJlbmRlclByb2plY3QoKTtcbnJlbmRlclRhc2soKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/index.js\n");

/***/ }),

/***/ "./src/scripts/main_code.js":
/*!**********************************!*\
  !*** ./src/scripts/main_code.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDo: () => (/* binding */ createToDo)\n/* harmony export */ });\nfunction createToDo(title, description, dueDate, priority, project) {\n    const options = {\n        day: \"2-digit\",\n        month: \"2-digit\",\n        year: \"numeric\",\n        hour: \"2-digit\",\n        minute: \"2-digit\",\n        second: \"2-digit\",\n        hour12: false,\n    };\n\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        project,\n        completed: false,\n        createdAt: new Date().toLocaleString('ru-Ru', options),\n\n        toggleComplete() {\n            this.completed = true;\n        }\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluX2NvZGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW5fY29kZS5qcz8xY2VmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdydS1SdScsIG9wdGlvbnMpLFxuXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main_code.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;