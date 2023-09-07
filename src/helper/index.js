export const rupiah =(nominal)=>{
  const formatNominal = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  }).format(nominal);
  const ribuan = formatNominal.substr(-6, 3);
  const formatRibuan = ribuan.replace(/\./g, "");
  return formatNominal.replace(ribuan, formatRibuan);
}
export const isoDate =(dateTransaction)=>{

  const tempDate = new Date(dateTransaction)
  const tempMounth = [
    'january','february','march','april','may','june','july','august','september','october','november','december'
  ]
  const day = tempDate.getDate().toString().padStart(2, '0')
  const mounth = tempMounth[tempDate.getMonth()]
  const year = tempDate.getFullYear()

  const hour = tempDate.getUTCHours()+7
  const minute = tempDate.getUTCMinutes()

  return(
    day+' '+mounth+' '+year+' '+hour+':'+minute+' WIB'
  )


}