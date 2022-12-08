const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://localhost:3080",
			changeOrigin: true,
		})
	);
	app.use(
		"/api2",
		createProxyMiddleware({
			target: "http://localhost:3070",
			changeOrigin: true,
		})
	);
	//이런식으로 위의 것들을 하나로 합칠 수 있다. '/api' 이름이 비슷하면 권장
	// app.use(
	// 	["/api","/api2","/api3"], //순서 잘 맞춰야 한다.
	// 	createProxyMiddleware({
	// 		target: "http://localhost:3080",
	// 		changeOrigin: true,
	// 		router:{
	// 			'/api2': "http://localhost:3070",
	//			'/api3': "http://localhost:3060"
	// 		}
	// 	})
	// );
};
