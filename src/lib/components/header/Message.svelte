<script>
	export let msgEvent = '';
	export let msgContent = '';
	export let msgAvatar = 'https://picsum.photos/80/80?2';
</script>

<li>
	<a href={undefined} class="gap-4">
		<div class="avatar">
			<div class="w-8 rounded-full">
				<img alt="avatar" src={msgAvatar} />
			</div>
		</div>
		<span>
			<b>{msgEvent}</b>
			<br />
			{msgContent}
		</span>
	</a>
</li>
