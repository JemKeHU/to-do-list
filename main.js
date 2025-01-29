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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_code */ \"./src/scripts/main_code.js\");\n\n\nconst projects = { \"Hello!\": [] };\nlet currentProject = \"Hello!\";\n\nfunction renderProject() {\n    const projectList = document.querySelector(\"#project-list\");\n    const projectSelect = document.querySelector(\"#task-project\");\n\n    projectList.innerHTML = \"\";\n    projectSelect.innerHTML = \"\";\n\n    Object.keys(projects).forEach((projectName) => {\n        const li = document.createElement(\"li\");\n        li.textContent = projectName;\n        if (projectName === currentProject) li.style.fontWight = \"bold\";\n\n        li.addEventListener(\"click\", () => {\n            currentProject = projectName;\n            renderTask();\n            renderProject();\n        });\n\n        projectList.appendChild(li);\n\n        const option = document.createElement(\"option\");\n        option.value = projectName;\n        option.textContent = projectName;\n        projectSelect.appendChild(option);\n    });\n}\n\nfunction renderTask() {\n    const list = document.querySelector(\"#todo-list\");\n    list.innerHTML = \"\";\n\n    if (projects[currentProject]) {\n        projects[currentProject].forEach((todo, index) => {\n            const li = document.createElement(\"li\");\n            li.innerHTML = `\n                <strong>${todo.title}</strong>\n                <p>${todo.description || \"No description\"}</p>\n                <p>Deadline: ${todo.dueDate || \"Unknown\"}</p>\n                <p>Priority: ${todo.priority || \"Low\"}</p>\n                <p>Creation Date: ${todo.createdAt}</p>\n            `;\n\n            if (todo.completed) li.classList.add(\"completed\");\n\n            li.addEventListener(\"click\", () => {\n                todo.toggleComplete();\n                renderTask();\n            });\n\n            const deleteBtn = document.createElement(\"button\");\n            deleteBtn.textContent = \"❌\";\n            deleteBtn.addEventListener(\"click\", (e) => {\n                e.stopPropagation();\n                projects[currentProject].splice(index, 1);\n                renderTask();\n            });\n\n            li.appendChild(deleteBtn);\n            list.appendChild(li);\n        });\n    } else {\n        console.error(`Project \"${currentProject}\" not found.`);\n    }\n}\n\nconst projectAdder = document.querySelector(\"#add-project\");\nprojectAdder.addEventListener(\"click\", () => {\n    const projectName = document.querySelector(\"#new-project-name\").value.trim();\n    if (projectName && !projects[projectName]) {\n        projects[projectName] = [];\n        document.querySelector(\"#new-project-name\").value = \"\";\n        renderProject();\n        renderTask();\n    }\n});\n\nconst taskAdder = document.querySelector(\"#add-task\");\ntaskAdder.addEventListener(\"click\", () => {\n    const title = document.querySelector(\"#task-name\").value.trim();\n    const description = document.querySelector(\"#task-desc\").value.trim();\n    const dueDate = document.querySelector(\"#task-date\").value\n    const priority = document.querySelector(\"#task-priority\").value\n    const project = document.querySelector(\"#task-project\").value\n\n    if (title && projects[project]) {\n        projects[project].push((0,_main_code__WEBPACK_IMPORTED_MODULE_0__.createToDo)(title, description, dueDate, priority, project));\n        document.querySelector(\"#task-name\").value = \"\";\n        document.querySelector(\"#task-desc\").value = \"\";\n        document.querySelector(\"#task-date\").value = \"\";\n        renderTask();\n    }\n});\n\nrenderProject();\nrenderTask();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOztBQUF5Qzs7QUFFekMsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyxxQkFBcUIscUNBQXFDO0FBQzFELCtCQUErQiwwQkFBMEI7QUFDekQsK0JBQStCLHVCQUF1QjtBQUN0RCxvQ0FBb0MsZUFBZTtBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ04sa0NBQWtDLGVBQWU7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHNEQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcz8xNTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRvRG8gfSBmcm9tIFwiLi9tYWluX2NvZGVcIjtcblxuY29uc3QgcHJvamVjdHMgPSB7IFwiSGVsbG8hXCI6IFtdIH07XG5sZXQgY3VycmVudFByb2plY3QgPSBcIkhlbGxvIVwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0XCIpO1xuXG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0cykuZm9yRWFjaCgocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gY3VycmVudFByb2plY3QpIGxpLnN0eWxlLmZvbnRXaWdodCA9IFwiYm9sZFwiO1xuXG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgcmVuZGVyVGFzaygpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0XCIpO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGlmIChwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0pIHtcbiAgICAgICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3Ryb25nPiR7dG9kby50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb24gfHwgXCJObyBkZXNjcmlwdGlvblwifTwvcD5cbiAgICAgICAgICAgICAgICA8cD5EZWFkbGluZTogJHt0b2RvLmR1ZURhdGUgfHwgXCJVbmtub3duXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHkgfHwgXCJMb3dcIn08L3A+XG4gICAgICAgICAgICAgICAgPHA+Q3JlYXRpb24gRGF0ZTogJHt0b2RvLmNyZWF0ZWRBdH08L3A+XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQpIGxpLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kby50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2soKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCLinYxcIjtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2soKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFByb2plY3QgXCIke2N1cnJlbnRQcm9qZWN0fVwiIG5vdCBmb3VuZC5gKTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG5wcm9qZWN0QWRkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtbmFtZVwiKS52YWx1ZS50cmltKCk7XG4gICAgaWYgKHByb2plY3ROYW1lICYmICFwcm9qZWN0c1twcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdE5hbWVdID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHJlbmRlclByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyVGFzaygpO1xuICAgIH1cbn0pO1xuXG5jb25zdCB0YXNrQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrXCIpO1xudGFza0FkZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIikudmFsdWVcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIikudmFsdWVcblxuICAgIGlmICh0aXRsZSAmJiBwcm9qZWN0c1twcm9qZWN0XSkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICByZW5kZXJUYXNrKCk7XG4gICAgfVxufSk7XG5cbnJlbmRlclByb2plY3QoKTtcbnJlbmRlclRhc2soKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/index.js\n");

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