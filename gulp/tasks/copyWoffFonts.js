// Новая задача для копирования файлов .woff и .woff2 в dist без изменений
export const copyWoffFonts = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/assets/fonts/*.{woff,woff2}`, {})
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};
