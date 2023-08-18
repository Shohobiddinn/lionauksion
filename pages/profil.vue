<template>
  <div>
    <div class="bg"></div>
    <div class="profil_page">
      <div class="container">
        <div class="information">
          <div class="information_inputs">
            <div class="info">
              <label class="info_label" for="com_name">kompaniya nomi</label>
              <input
                class="info_input"
                type="text"
                placeholder="kompaniya nomi"
                id="com_name"
              />
            </div>
            <div class="info">
              <label class="info_label" for="com_leader"
                >kompaniya rahbari F.I.O</label
              >
              <input
                class="info_input"
                type="text"
                placeholder="kompaniya nomi"
                id="com_leader"
              />
            </div>
            <div class="info">
              <label class="info_label" for="com_name"
                >kompaniya bosh buxgalter F.I.O</label
              >
              <input
                class="info_input"
                type="text"
                placeholder="kompaniya nomi"
                id="com_name"
              />
            </div>
            <div class="info">
              <label class="info_label" for="start_date"
                >kampaniya ish boshlagan sana</label
              >
              <input
                class="info_input"
                type="date"
                id="start_date"
                value="2017-12-11"
              />
            </div>
          </div>
          <div class="information_image">
            <input type="file" id="file_input" @change="imgFunc($event)" />
            <label for="file_input"
              ><img
              id="uploadedImage"
              src="../assets/image/4211763.png" alt=""
            /></label>
            <div class="information_image_btns">
              <div class="btn_exit btn">oraga</div>
              <div class="btn_save btn">yuborish</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script setup>
function imgFunc(e) {
  if (e.target.files[0]) {
    var picture = new FileReader();
    picture.readAsDataURL(e.target.files[0]);
    picture.addEventListener("load", function (event) {
      document
        .getElementById("uploadedImage")
        .setAttribute("src", event.target.result);
    });
  }
}
</script>

<style lang="scss" scoped>
</style>