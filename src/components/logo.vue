<template lang="pug">
#logo-wrap
	.text-wrap
		.text flo
		.hover ꔛ
		.text ave
</template>

<style lang="less" scoped>
#logo-wrap {
	position: relative;
	cursor: pointer;

	&:hover {
		.hover {
			opacity: 1;
		}
	}
}

.text-wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	color: var(--gray-color-400);

	.hover {
		position: absolute;
		left: calc(50% - 4.5px);
		bottom: -4px;
		transform: translateX(-50%);
		color: var(--primary-color) !important;
		font-size: 1.1rem;
		transition: all 0.2s;
		opacity: 0;
	}
}
</style>