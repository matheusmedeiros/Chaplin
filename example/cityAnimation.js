const CityAnimation = new Chaplin([
	'img1',
	'img2',
	'img3',
	'img4',
	'tower1',
	'tower2',
	'tower3',
	'tower4',
	'tower5',
	'tower6',
]);

CityAnimation.init(() => {
	CityAnimation
		.createAnimation({
			componentId: 'img1',
			moves: [
				{
					scrollInterval: { from: 0, to: 850 },
					objectPositions: {
						from: { x: 0, y: 20 },
						to: { x: 0, y: -1000 }
					},
				}
			]
		})
		.createAnimation({
			componentId: 'img2',
			moves: [
				{
					scrollInterval: { from: 150, to: 680 },
					objectPositions: {
						from: { x: 0, y: 20 },
						to: { x: 0, y: 290 },
					},
				},
				{
					scrollInterval: { from: 681, to: 1750 },
					objectPositions: {
						from: { x: 0, y: 290 },
						to: { x: 0, y: -1500 },
					},
				}
			]
		})
		.createAnimation({
			componentId: 'img3',
			moves: [
				{
					scrollInterval: { from: 100, to: 680 },
					objectPositions: {
						from: { x: 0, y: 20 },
						to: { x: 0, y: 290 },
					},
				},
				{
					scrollInterval: { from: 681, to: 1400 },
					objectPositions: {
						from: { x: 0, y: 290 },
						to: { x: 0, y: 250 },
					},
				},
				{
					scrollInterval: { from: 1401, to: 2236 },
					objectPositions: {
						from: { x: 0, y: 250 },
						to: { x: 0, y: -795 },
					},
				}
			]
		})
		.createAnimation({
			componentId: 'img4',
			moves: [
				{
					scrollInterval: { from: 55, to: 680 },
					objectPositions: {
						from: { x: 0, y: 20 },
						to: { x: 0, y: 290 },
					},
				},
				{
					scrollInterval: { from: 981, to: 1400 },
					objectPositions: {
						from: { x: 0, y: 290 },
						to: { x: 0, y: 250 },
					},
				},
				{
					scrollInterval: { from: 1401, to: 2236 },
					objectPositions: {
						from: { x: 0, y: 250 },
						to: { x: 0, y: -126 },
					},
				}
			]
		})
		.createAnimation({
			componentId: 'tower1',
			moves: [
				{
					scrollInterval: { from: 500, to: 680 },
					objectPositions: {
						from: { x: -197, y: -74 },
						to: { x: -197, y: 176 },
					},
				},
				{
					scrollInterval: { from: 681, to: 945 },
					objectPositions: {
						from: { x: -197, y: 176 },
						to: { x: -197, y: 83 },
					},
				},
				{
					scrollInterval: { from: 946, to: 1400 },
					objectPositions: {
						from: { x: -197, y: 83 },
						to: { x: -220, y: -149 },
					},
				},
				{
					scrollInterval: { from: 1400, to: 2236 },
					objectPositions: {
						from: { x: -220, y: -149 },
						to: { x: -220, y: -1278 }
					},
				},
			]
		})
		.createAnimation({
			componentId: 'tower2',
			moves: [
				{
					scrollInterval: { from: 500, to: 680 },
					objectPositions: {
						from: { x: -115, y: -115 },
						to: { x: -115, y: 135 },
					},
				},
				{
					scrollInterval: { from: 681, to: 945 },
					objectPositions: {
						from: { x: -115, y: 135 },
						to: { x: -115, y: 15 },
					},
				},
				{
					scrollInterval: { from: 946, to: 1400 },
					objectPositions: {
						from: { x: -115, y: 15 },
						to: { x: -222, y: -324 },
					},
				},
				{
					scrollInterval: { from: 1400, to: 2236 },
					objectPositions: {
						from: { x: -222, y: -324 },
						to: { x: -222, y: -1307 },
					},
				},
			]
		})
		.createAnimation({
			componentId: 'tower3',
			moves: [
				{
					scrollInterval: { from: 500, to: 680 },
					objectPositions: {
						from: { x: -31, y: -158 },
						to: { x: -31, y: 92 },
					},
				},
				{
					scrollInterval: { from: 681, to: 945 },
					objectPositions: {
						from: { x: -31, y: 92 },
						to: { x: -31, y: 15 },
					},
				},
				{
					scrollInterval: { from: 946, to: 1400 },
					objectPositions: {
						from: { x: -31, y: 15 },
						to: { x: 0, y: -318 },
					},
				},
				{
					scrollInterval: { from: 1400, to: 2236 },
					objectPositions: {
						from: { x: 0, y: -318 },
						to: { x: 0, y: -1306 },
					},
				},
			]
		})
		.createAnimation({
			componentId: 'tower4',
			moves: [
				{
					scrollInterval: { from: 500, to: 680 },
					objectPositions: {
						from: { x: 4, y: 65 },
						to: { x: 4, y: 305 },
					},
				},
				{
					scrollInterval: { from: 681, to: 1400 },
					objectPositions: {
						from: { x: 4, y: 305 },
						to: { x: 4, y: -137 },
					},
				},
				{
					scrollInterval: { from: 1400, to: 2236 },
					objectPositions: {
						from: { x: 4, y: -137 },
						to: { x: 4, y: -1276 },
					},
				},
			]
		})
		.createAnimation({
			componentId: 'tower5',
			moves: [
				{
					scrollInterval: { from: 500, to: 680 },
					objectPositions: {
						from: { x: 90, y: 12 },
						to: { x: 90, y: 252 },
					},
				},
				{
					scrollInterval: { from: 681, to: 945 },
					objectPositions: {
						from: { x: 90, y: 252 },
						to: { x: 90, y: 140 },
					},
				},
				{
					scrollInterval: { from: 946, to: 1400 },
					objectPositions: {
						from: { x: 90, y: 140 },
						to: { x: 220, y: -137 }
					},
				},
				{
					scrollInterval: { from: 1400, to: 2236 },
					objectPositions: {
						from: { x: 220, y: -137 },
						to: { x: 220, y: -1276 }
					},
				},
			]
		})
		.createAnimation({
			componentId: 'tower6',
			moves: [
				{
					scrollInterval: { from: 500, to: 680 },
					objectPositions: {
						from: { x: 171, y: -46 },
						to: { x: 171, y: 204 },
					},
				},
				{
					scrollInterval: { from: 681, to: 945 },
					objectPositions: {
						from: { x: 171, y: 204 },
						to: { x: 171, y: 140 },
					},
				},
				{
					scrollInterval: { from: 946, to: 1400 },
					objectPositions: {
						from: { x: 171, y: 140 },
						to: { x: 220, y: -320 }
					},
				},
				{
					scrollInterval: { from: 1400, to: 2236 },
					objectPositions: {
						from: { x: 220, y: -320 },
						to: { x: 220, y: -1306 }
					},
				},
			]
		});
});
