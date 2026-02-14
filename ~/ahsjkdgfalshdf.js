function p(s, _) {
	return s.split`
`.filter((x,i)=>!(i%4)).map(x=>x.split(_)[1].split` `[0]);
}
