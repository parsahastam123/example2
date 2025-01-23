function uploadFile(categoryId) {
    const categorySection = document.getElementById(categoryId);
    const input = categorySection.querySelector('input[type="file"]');
    const fileList = categorySection.querySelector('.file-list');

    if (input.files.length > 0) {
        const file = input.files[0];
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.download = file.name;

        listItem.appendChild(link);
        fileList.appendChild(listItem);

        input.value = '';
        alert('فایل با موفقیت آپلود شد!');
    } else {
        alert('لطفاً یک فایل انتخاب کنید.');
    }
}

// اضافه کردن انیمیشن ساده
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});