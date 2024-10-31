import {
  BtnsWrapper,
  PaginationButton,
  PaginationContainer,
  PaginationSvg,
  WrapNumb,
} from "./Pagination.styled";
import icon from "../../images/sprite.svg";

export default function Pagination({
  totalPages,
  handlePageChange,
  page,
  handleLastPage,
  handleFirstPage,
  maxPages,
  hasMore,
  handleCurrentPage,
}) {
  return (
    <PaginationContainer>
      <BtnsWrapper>
        <PaginationButton disabled={page === 1} onClick={handleFirstPage}>
          <PaginationSvg stroke={page === 1 ? "true" : ""}>
            <use href={`${icon}#arrow-left`} />
          </PaginationSvg>
          <PaginationSvg stroke={page === 1 ? "true" : ""}>
            <use href={`${icon}#arrow-left`} />
          </PaginationSvg>
        </PaginationButton>

        <PaginationButton
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <PaginationSvg stroke={page === 1 ? "true" : ""}>
            <use href={`${icon}#arrow-left`} />
          </PaginationSvg>
        </PaginationButton>
      </BtnsWrapper>

      <WrapNumb>
        {page > 1 && (
          <PaginationButton onClick={() => handleCurrentPage(page - 1)}>
            {page - 1}
          </PaginationButton>
        )}
        <PaginationButton disabled>{page}</PaginationButton>
        {page < maxPages && (
          <>
            <PaginationButton onClick={() => handleCurrentPage(page + 1)}>
              {page + 1}
            </PaginationButton>
            <p disabled>...</p>
          </>
        )}
      </WrapNumb>
      <BtnsWrapper>
        <PaginationButton
          disabled={!hasMore}
          onClick={() => handlePageChange(page + 1)}
        >
          <PaginationSvg stroke={page === totalPages ? "true" : ""}>
            <use href={`${icon}#arrow-right`} />
          </PaginationSvg>
        </PaginationButton>

        <PaginationButton disabled={page === maxPages} onClick={handleLastPage}>
          <PaginationSvg stroke={page === totalPages ? "true" : ""}>
            <use href={`${icon}#arrow-right`} />
          </PaginationSvg>
          <PaginationSvg stroke={page === totalPages ? "true" : ""}>
            <use href={`${icon}#arrow-right`} />
          </PaginationSvg>
        </PaginationButton>
      </BtnsWrapper>
    </PaginationContainer>
  );
}

// import {
//   PaginationButton,
//   PaginationContainer,
//   PaginationSvg,
//   WrapBtn,
//   WrapSvg,
// } from "./Pagination.styled";

// import React from "react";
// import icon from "../../images/sprite.svg";

// const Pagination = ({
//   currentPage,
//   handleCurrentPage,
//   maxPages,
//   handleFirstPage,
//   handlePrevPage,
//   handleNextPage,
//   hasMore,
//   handleLastPage,
// }) => {
//   return (
//     <PaginationContainer>
//       <WrapBtn>
//         <PaginationButton
//           onClick={handleFirstPage}
//           disabled={currentPage === 1}
//         >
//           <WrapSvg>
//             <PaginationSvg>
//               <use href={`${icon}#arrow-left`} />
//             </PaginationSvg>
//             <PaginationSvg>
//               <use href={`${icon}#arrow-left`} />
//             </PaginationSvg>
//           </WrapSvg>
//         </PaginationButton>
//         <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
//           <WrapSvg>
//             <PaginationSvg>
//               <use href={`${icon}#arrow-left`} />
//             </PaginationSvg>
//           </WrapSvg>
//         </PaginationButton>
//       </WrapBtn>

//       <WrapBtn>
//         {currentPage > 1 && (
//           <PaginationButton onClick={() => handleCurrentPage(currentPage - 1)}>
//             {" "}
//             {currentPage - 1}
//           </PaginationButton>
//         )}
//         <PaginationButton disabled>{currentPage}</PaginationButton>
//         {currentPage < maxPages && (
//           <>
//             <PaginationButton
//               onClick={() => handleCurrentPage(currentPage + 1)}
//             >
//               {currentPage + 1}
//             </PaginationButton>
//             <PaginationButton disabled>...</PaginationButton>
//           </>
//         )}
//       </WrapBtn>

//       <WrapBtn>
//         <PaginationButton onClick={handleNextPage} disabled={!hasMore}>
//           <WrapSvg>
//             <PaginationSvg>
//               <use href={`${icon}#arrow-right`} />
//             </PaginationSvg>
//           </WrapSvg>
//         </PaginationButton>
//         <PaginationButton
//           onClick={handleLastPage}
//           disabled={currentPage === maxPages}
//         >
//           <WrapSvg>
//             <PaginationSvg>
//               <use href={`${icon}#arrow-right`} />
//             </PaginationSvg>
//             <PaginationSvg>
//               <use href={`${icon}#arrow-right`} />
//             </PaginationSvg>
//           </WrapSvg>
//         </PaginationButton>
//       </WrapBtn>
//     </PaginationContainer>
//   );
// };

// export default Pagination;
