<script>
	import { followingCnt, followerCnt } from './Store';

	const imageUrl = 'https://picsum.photos/100/100';

	let following = 0;
	let follower = 0;

	followingCnt.subscribe(data => {
		following = data;
	});

	followerCnt.subscribe(data => {
		follower = data;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name='description' content='Svelte demo app' />
</svelte:head>

<section>
	<div class='welcome-top'>
		<span class='welcome-img'>
			<img src={imageUrl} alt='Welcome' />
		</span>
		
		<div class='welcome-score'>
			<a class='welcome-scoreItem'>
				<span class='welcome-scoreNo'>{following}</span>
				<span class='welcome-scoreText'>팔로잉</span>
			</a>
			<a class='welcome-scoreItem'>
				<span class='welcome-scoreNo'>{follower}</span>
				<span class='welcome-scoreText'>팔로워</span>
			</a>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.welcome-top {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-bottom: 14px;
	}
	.welcome-img {
		margin-right: 27px;
		width: 80px;
		height: 80px;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 auto;
		-moz-box-flex: 0;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		-webkit-background-size: 80px 80px;
		-moz-background-size: 80px 80px;
		-o-background-size: 80px 80px;
		background-size: 80px 80px;
	}
	.welcome-img img {
		display: block;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	}
	.welcome-score {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-moz-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		-webkit-column-gap: 6px;
		-moz-column-gap: 6px;
		column-gap: 6px;
	}
	.welcome-scoreItem {
		width: auto;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		margin-left: 20px;
		margin-right: 20px;
	}
	.welcome-scoreNo {
		display: block;
		font-size: 16px;
		font-weight: 600;
		color: #000;
	}
	.welcome-scoreText {
		display: block;
		font-size: 12px;
		font-weight: 400;
		color: #333;
	}
</style>
