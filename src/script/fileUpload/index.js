const fileUpload = document.querySelector("#file-upload.attached-file");

if (fileUpload !== null) {
  const scriptSrc = document.createElement("script");
  scriptSrc.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js";
  scriptSrc.async = "true";
  document.head.appendChild(scriptSrc);

  const script = document.createElement("script");
  //   script.innerHTML = `
  //     document.addEventListener('DOMContentLoaded', function() {
  //         document.getElementById('input_file').addEventListener('change', function() {
  //             selectFile(this.files);
  //             //this.files[0].size gets the size of your file.
  //             //alert(this.files[0].size);
  //         });
  //     });

  //     // 파일 리스트 번호
  //     var fileIndex = 0;
  //     // 등록할 전체 파일 사이즈
  //     var totalFileSize = 0;
  //     // 파일 리스트
  //     var fileList = new Array();
  //     // 파일 사이즈 리스트
  //     var fileSizeList = new Array();
  //     // 등록 가능한 파일 사이즈 MB
  //     var uploadSize = 50;
  //     // 등록 가능한 총 파일 사이즈 MB
  //     var maxUploadSize = 500;

  //     // $(function() {
  //     // 파일 드롭 다운
  //     fileDropDown();
  //     // });

  //     // 파일 드롭 다운
  //     function fileDropDown() {
  //         var dropZone = document.getElementById('dropZone');
  //         //Drag기능
  //         dropZone.addEventListener('dragenter', function(e) {
  //             e.stopPropagation();
  //             e.preventDefault();
  //             // 드롭다운 영역 css
  //             dropZone.style.backgroundColor = '#E3F2FC';
  //         });
  //         dropZone.addEventListener('dragleave', function(e) {
  //             e.stopPropagation();
  //             e.preventDefault();
  //             // 드롭다운 영역 css
  //             dropZone.style.backgroundColor = '#FFFFFF';
  //         });
  //         dropZone.addEventListener('dragover', function(e) {
  //             e.stopPropagation();
  //             e.preventDefault();
  //             // 드롭다운 영역 css
  //             dropZone.style.backgroundColor = '#E3F2FC';
  //         });
  //         dropZone.addEventListener('drop', function(e) {
  //             e.preventDefault();
  //             // 드롭다운 영역 css
  //             dropZone.style.backgroundColor = '#FFFFFF';

  //             var files = e.dataTransfer.files;
  //             if (files != null) {
  //                 if (files.length < 1) {
  //                     /* alert("폴더 업로드 불가"); */
  //                     console.log('폴더 업로드 불가');
  //                     return;
  //                 } else {
  //                     selectFile(files);
  //                 }
  //             } else {
  //                 alert('ERROR');
  //             }
  //         });
  //     }

  //     // 파일 선택시
  //     function selectFile(fileObject) {
  //         var files = null;

  //         if (fileObject != null) {
  //             // 파일 Drag 이용하여 등록시
  //             files = fileObject;
  //         } else {
  //             // 직접 파일 등록시
  //             // files = $('#multipaartFileList_' + fileIndex)[0].files;
  //         }

  //         // 다중파일 등록
  //         if (files != null) {
  //             if (files != null && files.length > 0) {
  //                 document.getElementById('fileDragDesc').style.display = 'none';
  //                 document.getElementById('fileListTable').style.display = 'block';
  //             } else {
  //                 document.getElementById('fileDragDesc').style.display = 'block';
  //                 document.getElementById('fileListTable').style.display = 'none';
  //             }

  //             for (var i = 0; i < files.length; i++) {
  //                 // 파일 이름
  //                 var fileName = files[i].name;
  //                 var fileNameArr = fileName.split('.');
  //                 // 확장자
  //                 var ext = fileNameArr[fileNameArr.length - 1];
  //                 console.log(ext);

  //                 var fileSize = files[i].size; // 파일 사이즈(단위 :byte)
  //                 console.log('fileSize=' + fileSize);
  //                 if (fileSize <= 0) {
  //                     console.log('0kb file return');
  //                     return;
  //                 }

  //                 var fileSizeKb = fileSize / 1024; // 파일 사이즈(단위 :kb)
  //                 var fileSizeMb = fileSizeKb / 1024; // 파일 사이즈(단위 :Mb)

  //                 var fileSizeStr = '';
  //                 if (1024 * 1024 <= fileSize) {
  //                     // 파일 용량이 1메가 이상인 경우
  //                     console.log('fileSizeMb=' + fileSizeMb.toFixed(2));
  //                     fileSizeStr = fileSizeMb.toFixed(2) + ' Mb';
  //                 } else if (1024 <= fileSize) {
  //                     console.log('fileSizeKb=' + parseInt(fileSizeKb));
  //                     fileSizeStr = parseInt(fileSizeKb) + ' kb';
  //                 } else {
  //                     console.log('fileSize=' + parseInt(fileSize));
  //                     fileSizeStr = parseInt(fileSize) + ' byte';
  //                 }

  //                 var extensions = [
  //                     'hwp',
  //                     'doc',
  //                     'docx',
  //                     'xls',
  //                     'xlsx',
  //                     'ppt',
  //                     'pptx',
  //                     'txt',
  //                     'png',
  //                     'pdf',
  //                     'jpg',
  //                     'jpeg',
  //                     'gif',
  //                     'zip'
  //                 ];
  //                 if (extensions.indexOf(ext) == -1) {
  //                     // 확장자 체크
  //                     /* alert("등록이 불가능한 파일 입니다.");
  //                         break; */
  //                     alert('등록이 불가능한 파일 입니다.(' + fileName + ')');
  //                 } else if (fileSizeMb > uploadSize) {
  //                     // 파일 사이즈 체크
  //                     alert('용량 초과! 업로드 가능 용량 : ' + uploadSize + ' MB');
  //                     break;
  //                 } else {
  //                     // 전체 파일 사이즈
  //                     totalFileSize += fileSizeMb;

  //                     // 파일 배열에 넣기
  //                     fileList[fileIndex] = files[i];

  //                     // 파일 사이즈 배열에 넣기
  //                     fileSizeList[fileIndex] = fileSizeMb;

  //                     // 업로드 파일 목록 생성
  //                     addFileList(fileIndex, fileName, fileSizeStr);

  //                     // 파일 번호 증가
  //                     fileIndex++;
  //                 }
  //             }
  //         } else {
  //             alert('ERROR');
  //         }
  //     }

  //     // 업로드 파일 목록 생성
  //     function addFileList(fIndex, fileName, fileSizeStr) {
  //         /* if (fileSize.match("^0")) {
  //                 alert("start 0");
  //             } */

  //         var trEle = document.createElement('tr');
  //         trEle.id = 'fileTr_' + fIndex;

  //         var tdEle = document.createElement('td');
  //         tdEle.innerText = fileName + ' (' + fileSizeStr + ')';

  //         var deleteBtn = document.createElement('input');
  //         deleteBtn.type = 'button';
  //         deleteBtn.value = '삭제';
  //         deleteBtn.setAttribute('onclick', 'deleteFile(' + fIndex + '); return false;');

  //         trEle.appendChild(tdEle).appendChild(deleteBtn);
  //         document.getElementById('fileTableTbody').appendChild(trEle);
  //     }

  //     // 업로드 파일 삭제
  //     function deleteFile(fIndex) {
  //         console.log('deleteFile.fIndex=' + fIndex);
  //         // 전체 파일 사이즈 수정
  //         totalFileSize -= fileSizeList[fIndex];

  //         // 파일 배열에서 삭제
  //         delete fileList[fIndex];

  //         // 파일 사이즈 배열 삭제
  //         delete fileSizeList[fIndex];

  //         // 업로드 파일 테이블 목록에서 삭제
  //         // $('#fileTr_' + fIndex).remove();
  //         var targetEle = document.getElementById('fileTr_' + fIndex);
  //         targetEle.parentNode.removeChild(targetEle);

  //         console.log('totalFileSize=' + totalFileSize);

  //         if (totalFileSize > 0) {
  //             document.getElementById('fileDragDesc').style.display = 'none';
  //             document.getElementById('fileListTable').style.display = 'block';
  //         } else {
  //             document.getElementById('fileDragDesc').style.display = 'block';
  //             document.getElementById('fileListTable').style.display = 'none';
  //         }
  //     }

  //     // 파일 등록
  //     function uploadFile() {
  //         // 등록할 파일 리스트
  //         var uploadFileList = Object.keys(fileList);

  //         // 파일이 있는지 체크
  //         if (uploadFileList.length == 0) {
  //             // 파일등록 경고창
  //             alert('파일이 없습니다.');
  //             return;
  //         }

  //         // 용량을 500MB를 넘을 경우 업로드 불가
  //         if (totalFileSize > maxUploadSize) {
  //             // 파일 사이즈 초과 경고창
  //             alert('총 용량 초과! 총 업로드 가능 용량 : ' + maxUploadSize + ' MB');
  //             return;
  //         }

  //         if (confirm('등록 하시겠습니까?')) {
  //             // 등록할 파일 리스트를 formData로 데이터 입력
  //             var form = $('#uploadForm');
  //             var formData = new FormData(form);
  //             for (var i = 0; i < uploadFileList.length; i++) {
  //                 formData.append('files', fileList[uploadFileList[i]]);
  //             }

  //             $.ajax({
  //                 url: '업로드 경로',
  //                 data: formData,
  //                 type: 'POST',
  //                 enctype: 'multipart/form-data',
  //                 processData: false,
  //                 contentType: false,
  //                 dataType: 'json',
  //                 cache: false,
  //                 success: function(result) {
  //                     if (result.data.length > 0) {
  //                         alert('성공');
  //                         location.reload();
  //                     } else {
  //                         alert('실패');
  //                         location.reload();
  //                     }
  //                 }
  //             });
  //         }
  //     }
  //     `;
  document.body.appendChild(script);
}