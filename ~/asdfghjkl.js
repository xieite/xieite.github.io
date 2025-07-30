const f = (a, b) => a.split`
`.filter((x,i)=>!(i%4)).map(x=>x.split('XIEITE_'+b+'_TYPE_')[1].split(' ')[0]).map(x=>`<a target="_blank" href="https://github.com/search?q=repo:Eczbek/xieite path:include/xieite/pp/${b.toLowerCase()}.hpp /XIEITE_${b}_TYPE_${x}$/&type=code"><code><i_>${x}</i_></code></a>`).join`, `
