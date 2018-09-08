import { Buffer } from 'buffer';

const data = require('../../../assets/svgs/svgs.json');

export class SVGGenerator {
	star(numStar: number, isFull: boolean) {
		const positions = [{x:450, y:480}, { x:590, y:480}, { x:730, y:480}];
		const theColor = [{fill: 'gold', stroke: '#c39335'}, {fill: 'silver', stroke: 'grey'}];
		let boolNum: number = 0;
		if(isFull === false) {
			boolNum = 1;
		}
		return `<g x='${positions[numStar-1].x}' y='${positions[numStar-1].y}' fill='${theColor[boolNum].fill}' stroke='${theColor[boolNum].stroke}' stroke-width="5px">${data.star}</g>`;
	}

	baseCircle(color: string) {
		return `<circle cx='810' cy='548' r='450' fill='${color}'/>`;
	}

	innerRing(color: string) {
		return `<circle fill='none' strokeWidth='15' id='e1_circle' cx='810' cy='550' r='475' stroke='${color}'/>`;
	}

	outerRing(color: string) {
		return `<circle fill='none' class='cls-4' id='e1_circle' strokeWidth='40' cx='810' cy='550' r='520' stroke='${color}'/>`;
	}

	branches() {
		return `<g fill='gold'>
		<path d="M 1319.222656 1041.265625 C 1273.277344 1053.574219 1224.253906 1057.53125 1179.636719 1072.753906 C 1255.207031 1007.933594 1250.894531 907.636719 1301.3125 831.296875 C 1317.371094 809.679688 1330.648438 787.023438 1349.367188 766.511719 C 1318.699219 828.054688 1332 907.902344 1296.769531 967.621094 C 1283.207031 991.347656 1263.808594 1014.359375 1242.359375 1032.992188 C 1249.367188 1032.730469 1255.503906 1026.660156 1261.664062 1022.609375 C 1318.890625 965.480469 1393.652344 949.507812 1455.554688 903.09375 C 1480.351562 883.328125 1503.0625 857.425781 1513.964844 829.414062 C 1502.253906 924.191406 1407.996094 1013.027344 1319.222656 1041.265625 Z M 1319.222656 1041.265625 "/>
		<path d="M 1525.382812 657.519531 C 1497.382812 697.375 1463.515625 734.476562 1437.648438 774.984375 C 1440.53125 742.914062 1444.328125 703.476562 1431.84375 673.097656 C 1410.203125 607.675781 1391.1875 541.253906 1385.054688 469.453125 L 1385.898438 442 C 1402.1875 515.320312 1474.1875 565.726562 1469.644531 647.972656 C 1471.292969 667.902344 1465.128906 684.847656 1461.398438 702.378906 L 1462.636719 703.675781 L 1465.878906 700.039062 C 1476.554688 659.695312 1481.945312 617.269531 1498.546875 579.628906 C 1522.140625 525.464844 1551.601562 470.800781 1539.59375 405.398438 C 1575.480469 482.503906 1564.609375 585.523438 1525.382812 657.519531 Z M 1525.382812 657.519531 "/>
		<path d="M 1481.191406 242.105469 C 1528.402344 306.109375 1538.75 408.113281 1504.363281 481.53125 C 1491.546875 512.644531 1482.492188 545.796875 1477.460938 580.234375 C 1475.058594 574.292969 1474.507812 566.308594 1472.363281 559.691406 C 1453.582031 487.824219 1385.640625 436.609375 1357.699219 368.851562 C 1348.839844 346.695312 1341.285156 323.800781 1337.097656 299.75 C 1366.953125 354.992188 1440.53125 383.523438 1460.585938 444.398438 C 1468.800781 459.792969 1468.339844 479.03125 1473.4375 495.585938 C 1474.507812 495.585938 1475.578125 494.789062 1475.578125 493.703125 C 1466.75 430.992188 1469.445312 365.363281 1477.949219 303.433594 C 1477.460938 269.886719 1474.1875 237.347656 1455.554688 211.382812 C 1467.503906 218.34375 1472.882812 231.71875 1481.191406 242.105469 Z M 1481.191406 242.105469 "/>
		<path d="M 1447.902344 229.816406 C 1460.304688 285.90625 1442.191406 340.53125 1453.582031 397.15625 L 1453.15625 397.644531 C 1422.65625 337.644531 1357.902344 309.324219 1313.34375 261.300781 C 1287.523438 232.804688 1276.296875 198.074219 1269.839844 161.300781 C 1295.367188 222.871094 1364.257812 236.4375 1403.808594 288.324219 C 1417.042969 300.285156 1421.359375 316.855469 1429.894531 330.421875 L 1431.289062 329.074219 C 1408.542969 280.503906 1400.925781 225.84375 1385.054688 174.039062 C 1377.109375 151.59375 1361.339844 129.539062 1340.183594 115.386719 C 1392.101562 126 1437.097656 180.222656 1447.902344 229.816406 Z M 1447.902344 229.816406 "/>
		<path d="M 1309.097656 101.1875 C 1348.199219 136.195312 1365.882812 181.523438 1377.300781 228.488281 L 1383.757812 243.402344 C 1327.007812 202.570312 1275.453125 147.683594 1239.210938 89.714844 L 1194.953125 44.921875 C 1233.863281 61.425781 1275.808594 71.277344 1309.097656 101.1875 Z M 1309.097656 101.1875 "/>
		<path d="M 412.78125 52.355469 C 373.550781 86.757812 346.339844 130.269531 317.238281 170.839844 C 291.152344 203.152344 257.78125 224.460938 228.207031 252.246094 C 244.171875 219.140625 244.753906 179.589844 267.398438 149.179688 C 299.621094 92.941406 359.371094 73.160156 412.78125 52.355469 Z M 412.78125 52.355469 "/>
		<path d="M 198.242188 172.15625 C 217.324219 148.429688 241.511719 131.941406 268.730469 124.976562 C 215.878906 161.300781 219.316406 226.390625 202.5625 280.503906 C 197.21875 300.511719 187.941406 318.949219 183.320312 339.457031 L 184.664062 340.53125 C 193.457031 317.339844 208.914062 295.433594 228.207031 276.511719 C 265.746094 241.847656 321.277344 220.242188 339.675781 168.960938 C 338.832031 240.222656 279.410156 296.246094 222.546875 336.296875 C 199.101562 356.875 176.488281 380.324219 163.578125 406.777344 C 162.3125 388.800781 166.234375 370.75 164.957031 351.488281 C 158.773438 289.28125 154.277344 218.28125 198.242188 172.15625 Z M 198.242188 172.15625 "/>
		<path d="M 91.300781 384.871094 C 89.710938 321.835938 115.863281 270.375 152.722656 223.40625 C 153.792969 222.871094 154.554688 221.800781 155.933594 222.058594 C 115.359375 283.734375 148.921875 361.417969 147.074219 431.542969 L 141.722656 503.34375 C 142.519531 503.863281 142.519531 506.019531 144.402344 505.191406 C 146.800781 497.1875 147.320312 488.636719 148.921875 480.40625 C 158.480469 422.492188 208.757812 381.398438 252.671875 341.375 C 262.046875 330.90625 270.339844 320.277344 275.15625 307.992188 C 271.570312 336.832031 262.535156 365.914062 250.578125 392.582031 C 216.398438 459.261719 153.257812 513.972656 141.722656 590.3125 C 136.128906 517.15625 86.335938 462.460938 91.300781 384.871094 Z M 91.300781 384.871094 "/>
		<path d="M 60.609375 474.515625 C 65.152344 454.800781 68.625 434.398438 77.203125 416.304688 C 60.949219 499.644531 116.980469 559.691406 135.359375 631.925781 C 143.050781 658.945312 144.933594 687.960938 155.933594 713.3125 C 156.957031 713.867188 157.847656 712.796875 158.480469 711.984375 C 131.113281 635.25 170.617188 563.941406 210.3125 503.863281 C 219.964844 487.582031 225.53125 469.453125 230.332031 450.742188 C 234.550781 485.472656 225.769531 525.464844 220.730469 561.523438 C 211.078125 607.402344 196.667969 650.914062 184.125 695.429688 C 175.875 723.246094 178.042969 754.632812 182.28125 783.777344 L 178.304688 780.601562 C 149.203125 726.914062 91.574219 685.042969 74.460938 626.390625 C 60.378906 579.628906 51.019531 525.464844 60.609375 474.515625 Z M 60.609375 474.515625 "/>
		<path d="M 57.980469 637.28125 C 64.390625 725.613281 159.34375 772.289062 203.355469 845.417969 C 213.769531 860.378906 222.804688 876.933594 236.722656 889.460938 C 234.550781 880.050781 225.769531 872.128906 222.546875 862.492188 C 207.148438 831.820312 201.535156 795.269531 205.238281 758.203125 C 209.503906 713.085938 228.417969 671.214844 221.199219 623.761719 C 259.875 707.179688 248.128906 811.304688 269.753906 901.699219 C 275.414062 921.46875 286.855469 939.121094 294.347656 958.015625 C 214.886719 903.875 106.535156 852.363281 71.28125 753.140625 C 56.421875 718.929688 54.765625 676.574219 57.980469 637.28125 Z M 57.980469 637.28125 "/>
		<path d="M 105.445312 840.125 C 149.753906 940.390625 260.714844 948.699219 335.117188 1009.753906 C 348.808594 1021.890625 363.152344 1032.214844 378.609375 1039.417969 L 379.40625 1038.609375 C 362.324219 1023.160156 342.566406 1005.5625 330.605469 985.539062 C 287.0625 924.972656 302.378906 840.125 269.753906 774.984375 C 299.394531 810.460938 326.355469 847.332031 344.25 887.578125 C 370.871094 953.273438 381.046875 1027.472656 442.644531 1077.132812 C 375.980469 1055.15625 297.882812 1061.296875 239.046875 1020.234375 C 174.804688 980.734375 117.46875 913.742188 105.445312 840.125 Z M 105.445312 840.125 "/>
		<path d="M 219.316406 1027.179688 C 290.355469 1108 406.433594 1081.035156 501.0625 1102.1875 C 514.429688 1104.011719 526.664062 1109.367188 540.828125 1107.195312 C 529.546875 1100.054688 513.894531 1100.828125 501.582031 1094.339844 C 427.40625 1068.269531 416.527344 987.9375 376.261719 933.769531 C 427.703125 967.945312 470.953125 1014.035156 518.410156 1058.699219 C 552.519531 1088.589844 593.582031 1102.386719 636.847656 1111.183594 C 626.449219 1114.984375 612.820312 1113.941406 601.660156 1116.867188 C 523.933594 1135.984375 437.582031 1167.238281 355.152344 1139.261719 C 301.566406 1122.382812 246.28125 1079.992188 219.316406 1027.179688 Z M 219.316406 1027.179688 "/>
		<path d="M 1183.5 1215.574219 C 1103.453125 1245.457031 1019.90625 1214.207031 957.382812 1166.777344 C 932.070312 1150.683594 909.757812 1127.503906 877.015625 1129.554688 C 865.136719 1129.328125 853.6875 1129.914062 843.59375 1132.828125 C 904.335938 1161.105469 960.757812 1200.085938 1012.347656 1249.941406 C 1003.652344 1259.871094 992.390625 1269.160156 981.785156 1277.726562 C 932.070312 1224.136719 877.015625 1172.558594 815.371094 1142.433594 C 803.296875 1144 791.8125 1151.265625 780.929688 1157.113281 C 730.742188 1188.855469 681.121094 1229.6875 643.808594 1279.675781 L 611.75 1253.1875 C 662.917969 1201.410156 719.515625 1161.105469 781.433594 1132.3125 C 720.589844 1113.035156 680.878906 1164.019531 634.695312 1189.957031 C 580.878906 1227.546875 503.480469 1245.199219 438.441406 1219.265625 C 403.464844 1205.992188 369.578125 1186.449219 344.25 1154.679688 C 395.4375 1189.957031 471.667969 1193.65625 529.878906 1170.742188 C 607.988281 1136.851562 689.152344 1093.886719 783.3125 1114.433594 C 798.007812 1114.691406 812.289062 1129.328125 826.171875 1116.867188 C 896.15625 1098.6875 975.390625 1111.183594 1035.644531 1143.183594 L 1097.746094 1168.085938 C 1155.46875 1189.4375 1230.097656 1183.53125 1279.574219 1148.347656 C 1254.136719 1180.023438 1219.386719 1202.71875 1183.5 1215.574219 Z M 1183.5 1215.574219 "/>
		<path d="M 1269.285156 1132.828125 C 1179.410156 1166.777344 1088.988281 1125.105469 1002.871094 1111.183594 L 986.292969 1109.078125 L 986.292969 1108.550781 C 1027.46875 1099.203125 1067.441406 1086.941406 1100.214844 1057.339844 C 1148.488281 1010.921875 1191.445312 963.140625 1245.054688 926.5625 C 1205.300781 977.554688 1201.085938 1050.132812 1135.414062 1082.917969 C 1119.164062 1093.554688 1098.652344 1095.4375 1081.878906 1103.496094 C 1105.796875 1104.011719 1127.695312 1095.4375 1151.378906 1093.039062 C 1239.441406 1079.207031 1340.183594 1093.398438 1401.960938 1018.351562 C 1379.023438 1070.644531 1321.585938 1114.433594 1269.285156 1132.828125 Z M 1269.285156 1132.828125 "/>
		<path d="M 1432.585938 879.855469 C 1397.09375 903.09375 1361.117188 924.644531 1327.007812 951.070312 L 1327.007812 947.824219 C 1379.25 860.96875 1353.710938 741.648438 1385.898438 646.058594 L 1397.90625 614.039062 C 1391.1875 673.585938 1417.042969 724.027344 1415.226562 783.777344 C 1413.410156 819.875 1401.636719 851.878906 1382.691406 880.699219 L 1385.898438 880.699219 C 1411.496094 847.070312 1431.484375 811.304688 1461.398438 779.269531 C 1507.832031 734.476562 1555.039062 688.546875 1561.136719 626.390625 C 1576.90625 730.160156 1518.699219 821.105469 1432.585938 879.855469 Z M 1432.585938 879.855469 "/>
		</g>`;
	}

	sdg(sdgNode: string) {
		return `<g fill='white' x='310' y='-100'>${sdgNode}</g>`;
	}
	generateSVG(theNum: number) {
		return `<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'>
		<title>${data.sdgs[theNum].title}</title>
			${data.styles}
			${this.baseCircle(data.sdgs[theNum].color)}
			${this.innerRing(data.sdgs[theNum].color)}
			${this.outerRing(data.sdgs[theNum].color)}
			${this.branches()}
			${this.sdg(data.sdgs[theNum].node)}
			${this.star(1, true)}
			${this.star(2, true)}
			${this.star(3, true)}
		</svg>`;
	}

	generateImgStringForSDG(sdgNum: number) {
		var encodedData = Buffer.from(this.generateSVG(sdgNum - 1)).toString('base64');
		return 'data:image/svg+xml;base64,' + encodedData;
	}
}
