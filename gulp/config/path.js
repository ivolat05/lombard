// получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist"; // путь к папке соброного проекта
const srcFolder = "./src"; // путь к папке с исходниками

// cодержиться инофрмация о пути к файлам
export const path = {
	build: {
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
		svgicons: `${srcFolder}/img/`,
	},
	src: {
		js: `${srcFolder}/assets/js/*.js`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,xml,webmanifest}`,
		svg: `${srcFolder}/assets/img/**/*.svg"`,
		scss: `${srcFolder}/assets/scss/*.scss`,
		css: `${srcFolder}/assets/css/*.css`,
		html: `${srcFolder}/pages/**/*.html`,
		svgicons: `${srcFolder}/assets/svgicons/*.svg`,
		files: `${srcFolder}/assets/files/**/*.*`,
	},
	watch: {
		js: [
			srcFolder + "/assets/js/**/*.js",
			srcFolder + "/assets/components/**/*.js",
		],
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,xml,webmanifest}`,
		scss: [
			srcFolder + "/assets/scss/**/*.scss",
			srcFolder + "/assets/components/**/*.scss",
		],
		css: [srcFolder + "/assets/css/*.css"],
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/assets/files/**/*.*`, // указваем за какими папками следить
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
};
