<template>
	<div id="box">
    <h3>Card title</h3>
    <div>
      <span>5 articles</span>
      <span>Last update 2 days ago</span>
    </div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';
  #box {
    width: 100%;
    height: 100%;
    border: 1px solid #eeeeee;
    background-color: white;
    text-align: center;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 0;
    }
  }
</style>