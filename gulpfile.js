var gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("default", ["html", "compile", "assets", "watch"]);

gulp.task("html", function() {
	return gulp.src("./src/index.html")
		.pipe(gulp.dest("./build"));
});

gulp.task("compile", function(callback) {
	exec("tsc && rollup -f es build/js/GameFramework.js > build/GameFramework.js", function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		callback(err);
	});
})

gulp.task("assets", function() {
	return gulp.src("./src/assets/**/*")
		.pipe(gulp.dest("./build/assets"));
});

gulp.task("watch", function() {
	gulp.watch("./src/index.html", ["html"]);
	gulp.watch("./src/ts/**/*.ts", ["compile"]);
	gulp.watch("./src/assets/**/*", ["assets"]);
});