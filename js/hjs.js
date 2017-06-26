
let MemData={
	numbers:[{"topThree":"159","numbers":["15911078760","15989331600","15989315511","15914099917","15986836957","15989895504"]},{"topThree":"186","numbers":["18676735935","18688836568","18624931267","18624931267","18675570085","18681588178"]},{"topThree":"189","numbers":["18965128957","18965128957"]},{"topThree":"136","numbers":["13622051016"]},{"topThree":"138","numbers":["13823665045"]},{"topThree":"185","numbers":["18503055249"]},{"topThree":"137","numbers":["13725588052"]},{"topThree":"158","numbers":["15852936398","15889649458"]},{"topThree":"150","numbers":["15019209653"]},{"topThree":"134","numbers":["13480988069"]},{"topThree":"133","numbers":["13392107763"]},{"topThree":"131","numbers":["13163765266"]},{"topThree":"135","numbers":["13510834141"]}],
	comunications:[{"name":"mcx","phone":"15911078760"},{"name":"lbx","phone":"18676735935"},{"name":"tjx","phone":"18688836568"},{"name":"hzf","phone":"18965128957"},{"name":"kqt","phone":"18624931267"},{"name":"vaf","phone":"13622051016"},{"name":"tqr","phone":"13823665045"},{"name":"ayq","phone":"18965128957"},{"name":"zmr","phone":"18624931267"},{"name":"faa","phone":"18503055249"},{"name":"bas","phone":"15989331600"},{"name":"heb","phone":"15989315511"},{"name":"qrz","phone":"13725588052"},{"name":"tqx","phone":"15852936398"},{"name":"vba","phone":"15019209653"},{"name":"fae","phone":"13480988069"},{"name":"nqr","phone":"15914099917"},{"name":"zxq","phone":"13392107763"},{"name":"mrq","phone":"15986836957"},{"name":"plo","phone":"15989895504"},{"name":"xcf","phone":"15889649458"},{"name":"ert","phone":"18675570085"},{"name":"asc","phone":"13163765266"},{"name":"afr","phone":"13510834141"},{"name":"gas","phone":"18681588178"}]
}

///////localStore generator////////
function InitLocaleStroe(DDlist = False,
	numbers = False,
	comunications = False) {
	if (DDlist) {
		$.getJSON('jsons/td.json', (jsonObj) => store.set('DDList', jsonObj));
	}
}


//////////////events/////////////////////////////////////////////////////////////
let { findInComunications,
	es
     } = function () {
		return _rel = {
			findInComunications(fn) {
				let dbs = store.get('comunications');
				return dbs.find(fn);
			},
			es: {
				relinPressed(eFn, k_code = 13) {
					$("#relin").keypress(e => {
						if (e.keyCode == k_code || k_code == 'any') {
							let val = $("#relin").val();
							eFn(val);
							return false;
						}});
				},
				doneClick(eFn) {
					$("#btn1").click(() => {
						let val = $("#relin").val();
						eFn(val);
					});
				},
				actionClick(eFn) {
					$("#btn2").click(() => eFn());
				}
			}
		};
	}();



InitLocaleStroe(DDlist = false,
	numbers = false,
	comunications = false);