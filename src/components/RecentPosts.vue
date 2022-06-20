<template>
    <section id="recent-posts">
        <div class="container">
            <div class="row">
                <h6 class="custom-margin">Our Blog</h6>
            </div>

            <div class="row">
                <h5>Recent Posts</h5>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 custom-padding">
                    <div class="card" style="width: 20rem;">
                        <img src="../assets/post1.png" class="card-img-top" alt="post1">
                        <div class="card-body">
                            <h5 class="card-title align-text">5 Ways Technology</h5>
                            <h6 class="card-subtitle align-text">19 November, 2019</h6>
                            <p class="card-text align-text">As the minuteness of the parts formed a great hindrance.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 custom-padding">
                    <div class="card" style="width: 20rem;">
                        <img src="../assets/post2.png" class="card-img-top" alt="post1">
                        <div class="card-body">
                            <h5 class="card-title align-text">How Technology Change</h5>
                            <h6 class="card-subtitle align-text">15 November, 2019</h6>
                            <p class="card-text align-text">As the minuteness of the parts formed a great hindrance.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 custom-padding">
                    <div class="card" style="width: 20rem;">
                        <img src="../assets/post3.png" class="card-img-top" alt="post1">
                        <div class="card-body">
                            <h5 class="card-title align-text">Business Today</h5>
                            <h6 class="card-subtitle align-text">10 November, 2019</h6>
                            <p class="card-text align-text">As the minuteness of the parts formed a great hindrance.</p>
                        </div>
                    </div>
                </div>

                 <div class="row">
                <center><button type="button" class="btn btn-outline-primary custom-color-btn">Load more</button></center>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'RecentPosts',
}
</script>
<style scoped>

    h6 {
        font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 32px;
/* identical to box height, or 200% */

text-align: center;
letter-spacing: 5px;
text-transform: uppercase;

color: #DEA04F;
    }

    h5 {
        font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 56px;
line-height: 64px;

text-align: center;

color: #333333;
    }

    .card {
        background: #FFFFFF;
box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.0957314);
border-radius: 24px;
padding: 0.7rem;
margin-top: 1rem;
    }

    .card-title {
        font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
color: #333333;
    }

    .card-subtitle {
        font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 45px;
color: #333333;

}

.card-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: rgba(51, 51, 51, 0.501557);
}

.card-img-top {
    border-radius: 18px 18px 0px 0px;
}

.align-text {
    text-align: left;
}

.custom-margin {
    margin-top: 4rem;
}

.custom-padding{
    padding: 3% 2%;;
}

.custom-color-btn{
    margin-top: 1rem;
    border: 2px solid #3F379B;
border-radius: 24px;
width: 10rem;
color: #3F379B;
}
</style>