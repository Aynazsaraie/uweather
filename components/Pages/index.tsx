import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 500, width: 700,backgroundColor:"#F0F8FF",backgroundRepeat:'no-repeat',backgroundSize:"cover",position:"absolute",left:100 }}>
      <div><img style={{height:530,width:700}} src="/343736_373.jpg"/></div>
          <div style={{width: "60%",height:350,backgroundColor:"#8EE5EE",opacity:0.5,position:'absolute',left:60,bottom:80,top:80,borderRadius:10, textAlign:"left",padding:60,
          fontFamily:'Time New Roman',fontSize:15,color:"rgb(5 16 25)0 34)"
      }}>



      <img style={{opacity:1,width:30,height:27}} /> Weather FeelsLike(in centigrade):28°c
      <br-x/>
      <br-x/>
      <img style={{opacity:1,width:24,height:20}} /> Humidity Level: 50%
      <br-x/>
      <br-x/>
      <img style={{opacity:1,width:26,height:25}} /> UV-Level:7
      <br-x/>
      <br-x/>
      <img style={{opacity:1,width:28,height:25}} /> Windspeed(km/H):4
      <br-x/>
      <br-x/>
      <img style={{opacity:1,width:28,height:25}} /> Sunrise: 06:25 AM
      <br-x/>
      <br-x/>
      <img style={{opacity:1,width:28,height:25}} /> Sunset: 07:44 PM
      </div>


     <center style={{fontSize:15,fontFamily:'Dana',color:"#104E8B"}}>
       Turing Team
     </center>

   </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  return {
    props: {
      data: global.QSON.stringify({
        session,
        // nlangs,
      })
    },
  }
}