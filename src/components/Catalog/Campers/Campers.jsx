import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampersItemById,
  fetchCatalogs,
} from "../../redux/catalogs/operations";
import { selectCamperById, selectItems } from "../../redux/catalogs/selectors";
import css from "./Campers.module.css";
import { CiHeart } from "react-icons/ci";

import { IoMdStar } from "react-icons/io";

import { GrMapLocation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Campers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectItems);

  const camperId = useSelector(selectCamperById);

  useEffect(() => {
    dispatch(fetchCatalogs());
  }, [dispatch, camperId]);

  // const onCamperClick = (id) => {
  //   dispatch(fetchCampersItemById(camperId));
  //   navigate(`/catalog/${camperId}`);
  // };

  return (
    <div className={css.list_wrapper_container}>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id} className={css.item}>
            <div className={css.wrap_img}>
              {" "}
              <img className={css.img} src={item.gallery[0].thumb} alt='' />
            </div>

            <div className={css.wrap_info_container}>
              <div className={css.wrap_info}>
                <div className={css.w_info_name_price}>
                  <h3 className={css.info_text}>{item.name}</h3>
                  <h3 className={css.info_text}>
                    {`\u20AC${item.price}`}
                    <CiHeart />
                  </h3>
                </div>

                <div className={css.w_info_star_location}>
                  <p>
                    <IoMdStar className={css.star} />
                    {item.rating}({item.reviews.length} Reviews)
                  </p>
                  <p>
                    <GrMapLocation />
                    {item.location}
                  </p>
                </div>

                <p className={css.description}>{item.description}</p>
              </div>

              <div className={css.wrap_info_filter}>
                <div className={css.filter_content}>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.5 4.375C7.5 3.87772 7.69754 3.40081 8.04917 3.04917C8.40081 2.69754 8.87772 2.5 9.375 2.5H10.625C11.1223 2.5 11.5992 2.69754 11.9508 3.04917C12.3025 3.40081 12.5 3.87772 12.5 4.375V5.625C12.5 6.12228 12.3025 6.59919 11.9508 6.95083C11.5992 7.30246 11.1223 7.5 10.625 7.5V8.75H17.5C17.6658 8.75 17.8247 8.81585 17.9419 8.93306C18.0592 9.05027 18.125 9.20924 18.125 9.375V10.625C18.125 10.7908 18.0592 10.9497 17.9419 11.0669C17.8247 11.1842 17.6658 11.25 17.5 11.25C17.3342 11.25 17.1753 11.1842 17.0581 11.0669C16.9408 10.9497 16.875 10.7908 16.875 10.625V10H10.625V10.625C10.625 10.7908 10.5592 10.9497 10.4419 11.0669C10.3247 11.1842 10.1658 11.25 10 11.25C9.83424 11.25 9.67527 11.1842 9.55806 11.0669C9.44085 10.9497 9.375 10.7908 9.375 10.625V10H3.125V10.625C3.125 10.7908 3.05915 10.9497 2.94194 11.0669C2.82473 11.1842 2.66576 11.25 2.5 11.25C2.33424 11.25 2.17527 11.1842 2.05806 11.0669C1.94085 10.9497 1.875 10.7908 1.875 10.625V9.375C1.875 9.20924 1.94085 9.05027 2.05806 8.93306C2.17527 8.81585 2.33424 8.75 2.5 8.75H9.375V7.5C8.87772 7.5 8.40081 7.30246 8.04917 6.95083C7.69754 6.59919 7.5 6.12228 7.5 5.625V4.375ZM10.625 6.25C10.7908 6.25 10.9497 6.18415 11.0669 6.06694C11.1842 5.94973 11.25 5.79076 11.25 5.625V4.375C11.25 4.20924 11.1842 4.05027 11.0669 3.93306C10.9497 3.81585 10.7908 3.75 10.625 3.75H9.375C9.20924 3.75 9.05027 3.81585 8.93306 3.93306C8.81585 4.05027 8.75 4.20924 8.75 4.375V5.625C8.75 5.79076 8.81585 5.94973 8.93306 6.06694C9.05027 6.18415 9.20924 6.25 9.375 6.25H10.625ZM0 14.375C0 13.8777 0.197544 13.4008 0.549175 13.0492C0.900805 12.6975 1.37772 12.5 1.875 12.5H3.125C3.62228 12.5 4.09919 12.6975 4.45083 13.0492C4.80246 13.4008 5 13.8777 5 14.375V15.625C5 16.1223 4.80246 16.5992 4.45083 16.9508C4.09919 17.3025 3.62228 17.5 3.125 17.5H1.875C1.37772 17.5 0.900805 17.3025 0.549175 16.9508C0.197544 16.5992 0 16.1223 0 15.625L0 14.375ZM1.875 13.75C1.70924 13.75 1.55027 13.8158 1.43306 13.9331C1.31585 14.0503 1.25 14.2092 1.25 14.375V15.625C1.25 15.7908 1.31585 15.9497 1.43306 16.0669C1.55027 16.1842 1.70924 16.25 1.875 16.25H3.125C3.29076 16.25 3.44973 16.1842 3.56694 16.0669C3.68415 15.9497 3.75 15.7908 3.75 15.625V14.375C3.75 14.2092 3.68415 14.0503 3.56694 13.9331C3.44973 13.8158 3.29076 13.75 3.125 13.75H1.875ZM7.5 14.375C7.5 13.8777 7.69754 13.4008 8.04917 13.0492C8.40081 12.6975 8.87772 12.5 9.375 12.5H10.625C11.1223 12.5 11.5992 12.6975 11.9508 13.0492C12.3025 13.4008 12.5 13.8777 12.5 14.375V15.625C12.5 16.1223 12.3025 16.5992 11.9508 16.9508C11.5992 17.3025 11.1223 17.5 10.625 17.5H9.375C8.87772 17.5 8.40081 17.3025 8.04917 16.9508C7.69754 16.5992 7.5 16.1223 7.5 15.625V14.375ZM9.375 13.75C9.20924 13.75 9.05027 13.8158 8.93306 13.9331C8.81585 14.0503 8.75 14.2092 8.75 14.375V15.625C8.75 15.7908 8.81585 15.9497 8.93306 16.0669C9.05027 16.1842 9.20924 16.25 9.375 16.25H10.625C10.7908 16.25 10.9497 16.1842 11.0669 16.0669C11.1842 15.9497 11.25 15.7908 11.25 15.625V14.375C11.25 14.2092 11.1842 14.0503 11.0669 13.9331C10.9497 13.8158 10.7908 13.75 10.625 13.75H9.375ZM15 14.375C15 13.8777 15.1975 13.4008 15.5492 13.0492C15.9008 12.6975 16.3777 12.5 16.875 12.5H18.125C18.6223 12.5 19.0992 12.6975 19.4508 13.0492C19.8025 13.4008 20 13.8777 20 14.375V15.625C20 16.1223 19.8025 16.5992 19.4508 16.9508C19.0992 17.3025 18.6223 17.5 18.125 17.5H16.875C16.3777 17.5 15.9008 17.3025 15.5492 16.9508C15.1975 16.5992 15 16.1223 15 15.625V14.375ZM16.875 13.75C16.7092 13.75 16.5503 13.8158 16.4331 13.9331C16.3158 14.0503 16.25 14.2092 16.25 14.375V15.625C16.25 15.7908 16.3158 15.9497 16.4331 16.0669C16.5503 16.1842 16.7092 16.25 16.875 16.25H18.125C18.2908 16.25 18.4497 16.1842 18.5669 16.0669C18.6842 15.9497 18.75 15.7908 18.75 15.625V14.375C18.75 14.2092 18.6842 14.0503 18.5669 13.9331C18.4497 13.8158 18.2908 13.75 18.125 13.75H16.875Z'
                      fill='#101828'
                    />
                  </svg>
                  <p className={css.filter_p_content}>{item.transmission}</p>{" "}
                </div>

                <div className={css.filter_content}>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_12164_434)'>
                      <path
                        d='M3.75 3.125C3.75 2.95924 3.81585 2.80027 3.93306 2.68306C4.05027 2.56585 4.20924 2.5 4.375 2.5H10.625C10.7908 2.5 10.9497 2.56585 11.0669 2.68306C11.1842 2.80027 11.25 2.95924 11.25 3.125V9.375C11.25 9.54076 11.1842 9.69973 11.0669 9.81694C10.9497 9.93415 10.7908 10 10.625 10H4.375C4.20924 10 4.05027 9.93415 3.93306 9.81694C3.81585 9.69973 3.75 9.54076 3.75 9.375V3.125Z'
                        fill='#101828'
                      />
                      <path
                        d='M1.25 2.5C1.25 1.83696 1.51339 1.20107 1.98223 0.732233C2.45107 0.263392 3.08696 0 3.75 0L11.25 0C11.913 0 12.5489 0.263392 13.0178 0.732233C13.4866 1.20107 13.75 1.83696 13.75 2.5V12.5C14.413 12.5 15.0489 12.7634 15.5178 13.2322C15.9866 13.7011 16.25 14.337 16.25 15V15.625C16.25 15.7908 16.3158 15.9497 16.4331 16.0669C16.5503 16.1842 16.7092 16.25 16.875 16.25C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V10H16.875C16.7092 10 16.5503 9.93415 16.4331 9.81694C16.3158 9.69973 16.25 9.54076 16.25 9.375V5.46875C16.25 5.30299 16.3158 5.14402 16.4331 5.02681C16.5503 4.9096 16.7092 4.84375 16.875 4.84375H18.7437C18.73 4.24875 18.6775 3.72625 18.4925 3.31625C18.3935 3.07785 18.2209 2.87729 18 2.74375C17.77 2.60625 17.42 2.5 16.875 2.5C16.7092 2.5 16.5503 2.43415 16.4331 2.31694C16.3158 2.19973 16.25 2.04076 16.25 1.875C16.25 1.70924 16.3158 1.55027 16.4331 1.43306C16.5503 1.31585 16.7092 1.25 16.875 1.25C17.58 1.24833 18.1683 1.38833 18.64 1.67C19.1187 1.955 19.4325 2.35875 19.6325 2.80375C20.0013 3.6225 20 4.635 20 5.405V9.37375C20.0002 9.45593 19.9841 9.53734 19.9528 9.61331C19.9214 9.68928 19.8754 9.75833 19.8174 9.8165C19.7593 9.87467 19.6904 9.92082 19.6145 9.95231C19.5386 9.98379 19.4572 10 19.375 10H18.75V15.625C18.75 16.1223 18.5525 16.5992 18.2008 16.9508C17.8492 17.3025 17.3723 17.5 16.875 17.5C16.3777 17.5 15.9008 17.3025 15.5492 16.9508C15.1975 16.5992 15 16.1223 15 15.625V15C15 14.6685 14.8683 14.3505 14.6339 14.1161C14.3995 13.8817 14.0815 13.75 13.75 13.75V18.75H14.375C14.5408 18.75 14.6997 18.8158 14.8169 18.9331C14.9342 19.0503 15 19.2092 15 19.375C15 19.5408 14.9342 19.6997 14.8169 19.8169C14.6997 19.9342 14.5408 20 14.375 20H0.625C0.45924 20 0.300269 19.9342 0.183058 19.8169C0.065848 19.6997 0 19.5408 0 19.375C0 19.2092 0.065848 19.0503 0.183058 18.9331C0.300269 18.8158 0.45924 18.75 0.625 18.75H1.25V2.5ZM12.5 2.5C12.5 2.16848 12.3683 1.85054 12.1339 1.61612C11.8995 1.3817 11.5815 1.25 11.25 1.25H3.75C3.41848 1.25 3.10054 1.3817 2.86612 1.61612C2.6317 1.85054 2.5 2.16848 2.5 2.5V18.75H12.5V2.5Z'
                        fill='#101828'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_12164_434'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className={css.filter_p_content}> {item.engine}</p>
                </div>

                <div className={css.filter_content}>
                  <svg
                    width='20'
                    height='18'
                    viewBox='0 0 20 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.625 1.5C14.7962 1.5 14.0013 1.82924 13.4153 2.41529C12.8292 3.00134 12.5 3.7962 12.5 4.625C12.5 4.79076 12.4342 4.94973 12.3169 5.06694C12.1997 5.18415 12.0408 5.25 11.875 5.25C11.7092 5.25 11.5503 5.18415 11.4331 5.06694C11.3158 4.94973 11.25 4.79076 11.25 4.625C11.25 3.75971 11.5066 2.91385 11.9873 2.19438C12.4681 1.47492 13.1513 0.914162 13.9508 0.583029C14.7502 0.251896 15.6299 0.165256 16.4785 0.334066C17.3272 0.502877 18.1067 0.919555 18.7186 1.53141C19.3304 2.14326 19.7471 2.92281 19.9159 3.77148C20.0847 4.62015 19.9981 5.49982 19.667 6.29924C19.3358 7.09867 18.7751 7.78195 18.0556 8.26268C17.3362 8.74341 16.4903 9 15.625 9H0.625C0.45924 9 0.300269 8.93415 0.183058 8.81694C0.065848 8.69973 0 8.54076 0 8.375C0 8.20924 0.065848 8.05027 0.183058 7.93306C0.300269 7.81585 0.45924 7.75 0.625 7.75H15.625C16.4538 7.75 17.2487 7.42076 17.8347 6.83471C18.4208 6.24866 18.75 5.4538 18.75 4.625C18.75 3.7962 18.4208 3.00134 17.8347 2.41529C17.2487 1.82924 16.4538 1.5 15.625 1.5ZM6.875 2.75C6.54348 2.75 6.22554 2.8817 5.99112 3.11612C5.7567 3.35054 5.625 3.66848 5.625 4C5.625 4.16576 5.55915 4.32473 5.44194 4.44194C5.32473 4.55915 5.16576 4.625 5 4.625C4.83424 4.625 4.67527 4.55915 4.55806 4.44194C4.44085 4.32473 4.375 4.16576 4.375 4C4.375 3.50555 4.52162 3.0222 4.79633 2.61108C5.07103 2.19995 5.46148 1.87952 5.91829 1.6903C6.37511 1.50108 6.87777 1.45158 7.36273 1.54804C7.84768 1.6445 8.29314 1.8826 8.64277 2.23223C8.9924 2.58187 9.2305 3.02732 9.32696 3.51228C9.42343 3.99723 9.37392 4.4999 9.1847 4.95671C8.99548 5.41353 8.67505 5.80397 8.26393 6.07868C7.8528 6.35338 7.36945 6.5 6.875 6.5H0.625C0.45924 6.5 0.300269 6.43415 0.183058 6.31694C0.065848 6.19973 0 6.04076 0 5.875C0 5.70924 0.065848 5.55027 0.183058 5.43306C0.300269 5.31585 0.45924 5.25 0.625 5.25H6.875C7.20652 5.25 7.52446 5.11831 7.75888 4.88388C7.9933 4.64946 8.125 4.33152 8.125 4C8.125 3.66848 7.9933 3.35054 7.75888 3.11612C7.52446 2.8817 7.20652 2.75 6.875 2.75ZM0 10.875C0 10.7092 0.065848 10.5503 0.183058 10.4331C0.300269 10.3159 0.45924 10.25 0.625 10.25H13.1775C13.9192 10.25 14.6442 10.4699 15.2609 10.882C15.8776 11.294 16.3582 11.8797 16.642 12.5649C16.9259 13.2502 17.0001 14.0042 16.8554 14.7316C16.7108 15.459 16.3536 16.1272 15.8292 16.6517C15.3047 17.1761 14.6365 17.5333 13.9091 17.6779C13.1817 17.8226 12.4277 17.7484 11.7424 17.4646C11.0572 17.1807 10.4715 16.7001 10.0595 16.0834C9.64743 15.4667 9.4275 14.7417 9.4275 14C9.4275 13.8342 9.49335 13.6753 9.61056 13.5581C9.72777 13.4409 9.88674 13.375 10.0525 13.375C10.2183 13.375 10.3772 13.4409 10.4944 13.5581C10.6117 13.6753 10.6775 13.8342 10.6775 14C10.6775 14.4945 10.8241 14.9778 11.0988 15.3889C11.3735 15.8001 11.764 16.1205 12.2208 16.3097C12.6776 16.4989 13.1803 16.5484 13.6652 16.452C14.1502 16.3555 14.5956 16.1174 14.9453 15.7678C15.2949 15.4181 15.533 14.9727 15.6295 14.4877C15.7259 14.0028 15.6764 13.5001 15.4872 13.0433C15.298 12.5865 14.9775 12.196 14.5664 11.9213C14.1553 11.6466 13.672 11.5 13.1775 11.5H0.625C0.45924 11.5 0.300269 11.4342 0.183058 11.3169C0.065848 11.1997 0 11.0408 0 10.875Z'
                      fill='#101828'
                    />
                  </svg>

                  {item.AC === true ? "AC" : "No AC"}
                </div>
                <div className={css.filter_content}>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_12164_437)'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0.624998 7.5C0.531477 7.50004 0.439157 7.52106 0.354842 7.56152C0.270527 7.60198 0.196366 7.66085 0.137827 7.73378C0.0792885 7.80672 0.0378632 7.89186 0.016605 7.98293C-0.00465315 8.074 -0.00520222 8.16869 0.0149983 8.26L2.08 17.5525C2.23414 18.2466 2.62034 18.8673 3.17485 19.3123C3.72936 19.7573 4.41903 19.9998 5.13 20H12.37C13.081 19.9998 13.7706 19.7573 14.3251 19.3123C14.8797 18.8673 15.2659 18.2466 15.42 17.5525L15.5837 16.815C16.5399 16.9938 17.5281 16.7941 18.3398 16.2581C19.1515 15.722 19.7231 14.8915 19.934 13.9419C20.1449 12.9923 19.9785 11.9979 19.47 11.1686C18.9615 10.3394 18.1507 9.74018 17.2087 9.4975L17.485 8.26C17.5052 8.16869 17.5047 8.074 17.4834 7.98293C17.4621 7.89186 17.4207 7.80672 17.3622 7.73378C17.3036 7.66085 17.2295 7.60198 17.1452 7.56152C17.0608 7.52106 16.9685 7.50004 16.875 7.5H0.624998ZM16.25 15.625C16.1177 15.6251 15.9856 15.6146 15.855 15.5938L16.9387 10.7212C17.5169 10.8887 18.0152 11.259 18.3424 11.7642C18.6695 12.2694 18.8036 12.8756 18.7198 13.4717C18.6361 14.0677 18.3403 14.6135 17.8866 15.0091C17.433 15.4046 16.8519 15.6233 16.25 15.625ZM3.3 17.2812L1.40375 8.75H16.0962L14.2 17.2812C14.1076 17.6977 13.8759 18.0702 13.5432 18.3373C13.2104 18.6043 12.7966 18.7499 12.37 18.75H5.13C4.70338 18.7499 4.28955 18.6043 3.95684 18.3373C3.62413 18.0702 3.39243 17.6977 3.3 17.2812Z'
                        fill='#101828'
                      />
                      <path
                        d='M5.5 0.999999L5.49625 1.005L5.47875 1.02875C5.3878 1.1539 5.30271 1.28321 5.22375 1.41625C5.15667 1.5229 5.09776 1.63447 5.0475 1.75C5.015 1.825 5.005 1.865 5.00125 1.87875V1.88375C5.01567 1.99425 5.05452 2.10015 5.115 2.19375C5.20875 2.36 5.3375 2.53375 5.5 2.75L5.5125 2.765C5.66 2.9625 5.8375 3.19875 5.975 3.44375C6.115 3.69375 6.25 4.0125 6.25 4.375C6.25 4.61 6.16875 4.835 6.10125 4.9925C6.029 5.16009 5.94461 5.32219 5.84875 5.4775C5.75069 5.64141 5.64516 5.80075 5.5325 5.955L5.51 5.98625L5.50375 5.99625L5.50125 5.99875C5.40196 6.13152 5.25399 6.21942 5.0899 6.24309C4.9258 6.26677 4.75902 6.22429 4.62625 6.125C4.49348 6.02571 4.40558 5.87774 4.38191 5.71365C4.35823 5.54955 4.40071 5.38277 4.5 5.25L4.50375 5.245L4.52125 5.22125C4.6122 5.0961 4.69729 4.96679 4.77625 4.83375C4.84333 4.7271 4.90224 4.61553 4.9525 4.5C4.985 4.425 4.995 4.385 4.99875 4.37125C4.98544 4.25912 4.94698 4.15144 4.88625 4.05625C4.77022 3.86232 4.64117 3.67647 4.5 3.5L4.4875 3.485C4.31862 3.26913 4.16412 3.0424 4.025 2.80625C3.85475 2.52466 3.76003 2.2039 3.75 1.875C3.75 1.64 3.83125 1.415 3.89875 1.2575C3.9725 1.085 4.06625 0.914999 4.15125 0.772499C4.25055 0.609364 4.35604 0.450081 4.4675 0.294999L4.49875 0.251249C4.59804 0.118475 4.74601 0.0305821 4.9101 0.00690566C5.0742 -0.0167708 5.24098 0.0257087 5.37375 0.124999C5.50652 0.22429 5.59442 0.372258 5.61809 0.536352C5.64177 0.700446 5.59929 0.867225 5.5 0.999999ZM9.25 0.999999L9.24625 1.005L9.22875 1.02875C9.1378 1.1539 9.05271 1.28321 8.97375 1.41625C8.90667 1.5229 8.84776 1.63447 8.7975 1.75C8.765 1.825 8.755 1.865 8.75125 1.87875V1.88375C8.76567 1.99425 8.80452 2.10015 8.865 2.19375C8.95875 2.36 9.0875 2.53375 9.25 2.75L9.2625 2.765C9.41 2.9625 9.5875 3.19875 9.725 3.44375C9.865 3.69375 10 4.0125 10 4.375C10 4.61 9.91875 4.835 9.85125 4.9925C9.779 5.16009 9.69461 5.32219 9.59875 5.4775C9.50069 5.64141 9.39516 5.80075 9.2825 5.955L9.26 5.98625L9.25375 5.99625L9.25125 5.99875C9.15196 6.13152 9.00399 6.21942 8.8399 6.24309C8.6758 6.26677 8.50902 6.22429 8.37625 6.125C8.24348 6.02571 8.15558 5.87774 8.13191 5.71365C8.10823 5.54955 8.15071 5.38277 8.25 5.25L8.25375 5.245L8.27125 5.22125C8.3622 5.0961 8.44729 4.96679 8.52625 4.83375C8.59333 4.7271 8.65224 4.61553 8.7025 4.5C8.735 4.425 8.745 4.385 8.74875 4.37125C8.73544 4.25912 8.69698 4.15144 8.63625 4.05625C8.52022 3.86232 8.39117 3.67647 8.25 3.5L8.2375 3.485C8.06862 3.26913 7.91412 3.0424 7.775 2.80625C7.60475 2.52466 7.51003 2.2039 7.5 1.875C7.5 1.64 7.58125 1.415 7.64875 1.2575C7.7225 1.085 7.81625 0.914999 7.90125 0.772499C8.00055 0.609364 8.10604 0.450081 8.2175 0.294999L8.24875 0.251249C8.34804 0.118475 8.49601 0.0305821 8.6601 0.00690565C8.8242 -0.0167708 8.99098 0.0257087 9.12375 0.124999C9.25652 0.22429 9.34442 0.372258 9.36809 0.536352C9.39177 0.700446 9.34929 0.867225 9.25 0.999999ZM13 0.999999L12.9963 1.005L12.9788 1.02875C12.8878 1.1539 12.8027 1.28321 12.7238 1.41625C12.6567 1.5229 12.5978 1.63447 12.5475 1.75C12.515 1.825 12.505 1.865 12.5013 1.87875V1.88375C12.5157 1.99425 12.5545 2.10015 12.615 2.19375C12.7087 2.36 12.8375 2.53375 13 2.75L13.0125 2.765C13.16 2.9625 13.3375 3.19875 13.475 3.44375C13.615 3.69375 13.75 4.0125 13.75 4.375C13.75 4.61 13.6687 4.835 13.6012 4.9925C13.529 5.16009 13.4446 5.32219 13.3488 5.4775C13.2511 5.64139 13.146 5.80072 13.0338 5.955L13.01 5.98625L13.0037 5.99625L13.0013 5.99875C12.902 6.13152 12.754 6.21942 12.5899 6.24309C12.4258 6.26677 12.259 6.22429 12.1263 6.125C11.9935 6.02571 11.9056 5.87774 11.8819 5.71365C11.8582 5.54955 11.9007 5.38277 12 5.25L12.0037 5.245L12.0212 5.22125C12.1122 5.0961 12.1973 4.96679 12.2762 4.83375C12.3433 4.7271 12.4022 4.61553 12.4525 4.5C12.485 4.425 12.495 4.385 12.4987 4.37125C12.4854 4.25912 12.447 4.15144 12.3863 4.05625C12.2702 3.86232 12.1412 3.67647 12 3.5L11.9875 3.485C11.8186 3.26913 11.6641 3.0424 11.525 2.80625C11.3547 2.52466 11.26 2.2039 11.25 1.875C11.25 1.64 11.3313 1.415 11.3988 1.2575C11.4725 1.085 11.5663 0.914999 11.6512 0.772499C11.7505 0.609364 11.856 0.450081 11.9675 0.294999L11.9987 0.251249C12.098 0.118475 12.246 0.0305821 12.4101 0.00690565C12.5742 -0.0167708 12.741 0.0257087 12.8737 0.124999C13.0065 0.22429 13.0944 0.372258 13.1181 0.536352C13.1418 0.700446 13.0993 0.867225 13 0.999999Z'
                        fill='#101828'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_12164_437'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  {item.kitchen === true ? (
                    <span style={{ textDecoration: "line-through" }}>
                      Kitchen
                    </span>
                  ) : (
                    "Kitchen"
                  )}
                </div>
              </div>

              <div className={css.wrap_button}>
                {" "}
                <button
                  className={css.button}
                  onClick={() => {
                    dispatch(fetchCampersItemById(item.id));
                    navigate(`/catalog/${item.id}`);
                  }}
                >
                  Show more
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Campers;
