// Новый таск для копирования CSS файлов в dist без изменений
export const css = () => {
	return app.gulp
		.src(app.path.src.css) // Путь к исходным CSS файлам
		.pipe(app.gulp.dest(app.path.build.css)) // Копирование в папку сборки (dist)
		.pipe(app.plugins.browsersync.stream()); // Обновление браузера при копировании
};
