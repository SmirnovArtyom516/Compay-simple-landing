import React from 'react';

function Blog(): JSX.Element {
  return(
   <div style={{ padding: '35px'}}>
    <div>
      <h2 style={{ fontFamily: 'Open Sans'}}>
        ТОЛЬКО ОНЛАЙН
      </h2>
      <div style={{display: 'flex'}}>
      <img style={{marginRight: '10px'}} src="https://www.podrygka.ru/upload/iblock/2ac/2ac0fdf7a727d1301bf23f8db13cd1fb.jpg" alt="" />
      <img src="https://www.podrygka.ru/upload/iblock/321/321ccc40cf05c5be622d8b4f861baa1d.jpg" alt="" />
      </div>
    </div>
    <div>
      <h2 style={{ fontFamily: 'Open Sans'}}>
      АКЦИИ МЕСЯЦА ДО 30.06
      </h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <img style={{marginRight: '10px'}} src="https://www.podrygka.ru/upload/iblock/f4d/f4d5a1eea3de1daa490d9ce781ab88c4.jpg" alt="" />
      <img style={{marginRight: '10px'}} src="https://www.podrygka.ru/upload/iblock/a2d/a2d547554036c842a7bb400a24a50744.jpg" alt="" />
      <img style={{marginRight: '10px'}} src="https://www.podrygka.ru/upload/iblock/128/12843a9a489ecd38fe7557ed000cef8e.jpg" alt="" />
      <img style={{marginRight: '10px', marginTop: '10px'}} src="https://www.podrygka.ru/upload/iblock/cce/cce6c70e9c210570a32981cf3c2fc023.jpg" alt="" />
      <img style={{marginRight: '10px', marginTop: '10px'}} src="https://www.podrygka.ru/upload/iblock/351/351410ce26a6c4df4ba443eaa3b1a36a.jpg" alt="" />

      </div>
    </div>
  </div>
  )
}

export default Blog;
