// function
const productInfo0 = {
	productName: 'Mobile',
	productPrice: 40,
	productQuantity: 2,
	isAvailable: true,
};
const productInfo2 = {
	productName: 'Computer',
	productPrice: 400,
	productQuantity: 10,
	isAvailable: true,
};
const productInfo3 = {
	productName: 'Laptop',
	productPrice: 350,
	productQuantity: 100,
	isAvailable: true,
};
function showProductInfo(productDetails) {
	return `productName = ${productDetails.productName} , productPrice = ${productDetails.productPrice} , quantity = ${productDetails.productQuantity} , isAvailable = ${productDetails.isAvailable}`;
}
const mobileInfo = showProductInfo(productInfo0);
const computerInfo = showProductInfo(productInfo2);
const laptopInfo = showProductInfo(productInfo3);
console.log(mobileInfo);
console.log(computerInfo);
console.log(laptopInfo);
