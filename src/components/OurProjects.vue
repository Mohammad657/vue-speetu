<template>
  <p class="par">Our Work</p>
  <p class="par1">Our Projects</p>
  <div class="border">
    <div class="btn1">
      <button class="btn">All</button>
      <button class="btn">Design</button>
      <button class="btn">Tech</button>
      <button class="btn">Medical</button>
      <button class="btn">AR/VR</button>
    </div>
  </div>

  <!-- <div class="border1">
    <div class="img">

    </div>
    <p class="par2">
        Management System
    </p>
    <p class="par3">
        Design
    </p>
  </div> -->
  <div class="card" style="width: 18rem;">
  <img src="../assets/1.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</template>
<script>
export default {
  name: "OurProjects",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.par {
  position: absolute;
  width: 200px;
  height: 32px;
  left: 654px;
  top: 3610px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;

  color: #dea04f;
}
.par1 {
  position: absolute;
  width: 354px;
  height: 64px;
  left: 543px;
  top: 3660px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 64px;
  /* identical to box height, or 114% */

  text-align: center;

  color: #333333;
}
.border {
  position: absolute;
  width: 570px;
  height: 64px;
  left: 435px;
  top: 3760px;

  background: #ffffff;
  padding: 10px;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.0957314);
  border-radius: 32px;
}
.btn {
  padding-left: 5%;
  padding-right: 6%;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  color: #333333;
}
.btn1 {
  text-align-last: center;
  text-align: center;
  width: 570px;
  justify-self: space-between;
}
.border1{

    position: absolute;
width: 370px;
height: 370px;
left: 135px;
top: 3872px;
justify-content: center;
background: #FFFFFF;
box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.0957314);
border-radius: 24px;
}
.img{
    margin-left:17px;
    text-align: -webkit-center;
    margin-top: 15px;
width: 338px;
height: 256px;
background:url(../assets/1.png);
border-radius: 18px 18px 0px 0px;
}
.par2{
        margin-left:17px;

width: 262px;
height: 32px;
left: 167px;
top: 4167px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */


color: #333333;

}
.par3{
width: 57px;
height: 32px;
    margin-left:17px;
/* left: 167px;
top: 4202px; */
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
/* identical to box height, or 200% */


color: rgba(51, 51, 51, 0.501557);
}
.card{
       position: absolute;
width: 370px;
height: 370px;
left: 135px;
top: 3872px;
justify-content: center;
background: #FFFFFF;
box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.0957314);
border-radius: 24px;

}
</style>