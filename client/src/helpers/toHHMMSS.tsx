const toHHMMSS = (secs: number) => {
	const sec_num = parseInt(secs.toString(), 10);
	const hours: any = Math.floor(sec_num / 3600);
	let minutes: any = Math.floor((sec_num - hours * 3600) / 60);
	let seconds: any = sec_num - hours * 3600 - minutes * 60;

	if (minutes < 10 && hours) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return hours ? hours + ':' : '' + minutes + ':' + seconds;
};

export default toHHMMSS;
