import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 },
  };
  const arrow = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.4 } },
  };

  return (
    <Marquee>
      <div className="flex items-center py-10 md:px-20 gap-24 justify-between">
        <div>
          <svg
            // variants={button}
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5782 27.3427C11.5782 27.4823 11.4177 27.594 11.2153 27.594C10.985 27.6149 10.8245 27.5033 10.8245 27.3427C10.8245 27.2032 10.985 27.0915 11.1874 27.0915C11.3968 27.0706 11.5782 27.1822 11.5782 27.3427ZM9.40774 27.0287C9.35889 27.1683 9.49847 27.3288 9.70784 27.3707C9.88929 27.4404 10.0987 27.3707 10.1405 27.2311C10.1824 27.0915 10.0498 26.931 9.84044 26.8682C9.65899 26.8193 9.45659 26.8891 9.40774 27.0287ZM12.4925 26.91C12.2901 26.9589 12.1505 27.0915 12.1714 27.252C12.1924 27.3916 12.3738 27.4823 12.5832 27.4335C12.7856 27.3846 12.9252 27.252 12.9042 27.1124C12.8833 26.9798 12.6949 26.8891 12.4925 26.91ZM17.0847 0.166382C7.40476 0.166382 0 7.51531 0 17.1952C0 24.935 4.87137 31.5581 11.8295 33.8891C12.7228 34.0496 13.0368 33.4983 13.0368 33.0446C13.0368 32.6119 13.0159 30.2251 13.0159 28.7595C13.0159 28.7595 8.13058 29.8063 7.10466 26.6797C7.10466 26.6797 6.30905 24.6488 5.16449 24.1254C5.16449 24.1254 3.56629 23.0297 5.27615 23.0506C5.27615 23.0506 7.01393 23.1902 7.97006 24.8512C9.49847 27.5451 12.0598 26.7705 13.0578 26.3098C13.2183 25.1932 13.6719 24.4185 14.1744 23.9579C10.2731 23.5252 6.33696 22.9599 6.33696 16.2461C6.33696 14.3268 6.86737 13.3637 7.98402 12.1354C7.80256 11.6818 7.20934 9.81141 8.16547 7.39666C9.62409 6.94302 12.981 9.281 12.981 9.281C14.3768 8.89018 15.8773 8.68778 17.3638 8.68778C18.8504 8.68778 20.3509 8.89018 21.7467 9.281C21.7467 9.281 25.1036 6.93605 26.5622 7.39666C27.5183 9.81839 26.9251 11.6818 26.7437 12.1354C27.8603 13.3707 28.5443 14.3338 28.5443 16.2461C28.5443 22.9808 24.4336 23.5182 20.5323 23.9579C21.1744 24.5093 21.7188 25.5561 21.7188 27.1962C21.7188 29.5481 21.6978 32.4584 21.6978 33.0307C21.6978 33.4843 22.0189 34.0356 22.9052 33.8751C29.8842 31.5581 34.616 24.935 34.616 17.1952C34.616 7.51531 26.7646 0.166382 17.0847 0.166382ZM6.78362 24.2371C6.69289 24.3069 6.71383 24.4674 6.83248 24.6C6.94414 24.7116 7.10466 24.7605 7.19539 24.6698C7.28611 24.6 7.26518 24.4395 7.14653 24.3069C7.03487 24.1952 6.87435 24.1463 6.78362 24.2371ZM6.02989 23.6718C5.98103 23.7625 6.05082 23.8742 6.1904 23.944C6.30207 24.0137 6.44165 23.9928 6.4905 23.8951C6.53936 23.8044 6.46957 23.6927 6.32999 23.6229C6.1904 23.581 6.07874 23.602 6.02989 23.6718ZM8.29109 26.1563C8.17943 26.247 8.2213 26.4564 8.38182 26.589C8.54234 26.7495 8.74473 26.7705 8.83546 26.6588C8.92619 26.5681 8.88431 26.3587 8.74473 26.2261C8.59119 26.0656 8.38182 26.0446 8.29109 26.1563ZM7.49548 25.1304C7.38382 25.2002 7.38382 25.3816 7.49548 25.5422C7.60715 25.7027 7.79558 25.7725 7.88631 25.7027C7.99797 25.6119 7.99797 25.4305 7.88631 25.27C7.7886 25.1095 7.60715 25.0397 7.49548 25.1304Z"
              fill="black"
            />
          </svg>{" "}
        </div>
        <div>
          <svg
            width="59"
            height="34"
            viewBox="0 0 59 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_746_5586)">
              <path
                d="M17.034 12.424C17.034 13.1186 17.1091 13.6817 17.2405 14.0947C17.3907 14.5077 17.5784 14.9582 17.8412 15.4463C17.935 15.5964 17.9726 15.7466 17.9726 15.878C17.9726 16.0657 17.86 16.2534 17.6159 16.4411L16.4333 17.2295C16.2644 17.3422 16.0954 17.3985 15.9453 17.3985C15.7575 17.3985 15.5698 17.3046 15.3821 17.1357C15.1193 16.8541 14.8941 16.5538 14.7063 16.2534C14.5186 15.9343 14.3309 15.5777 14.1244 15.1459C12.6603 16.8729 10.8206 17.7364 8.60561 17.7364C7.0288 17.7364 5.77111 17.2859 4.85131 16.3848C3.93151 15.4838 3.46222 14.2824 3.46222 12.7807C3.46222 11.1851 4.02536 9.88989 5.17043 8.91377C6.31549 7.93766 7.83598 7.4496 9.76944 7.4496C10.4077 7.4496 11.0647 7.50591 11.7592 7.59977C12.4538 7.69363 13.1671 7.8438 13.9179 8.01274V6.64242C13.9179 5.21579 13.6176 4.2209 13.0357 3.63899C12.435 3.05707 11.4213 2.7755 9.97593 2.7755C9.31892 2.7755 8.64315 2.85058 7.94861 3.01953C7.25406 3.18847 6.57829 3.39496 5.92128 3.65776C5.62094 3.78916 5.39568 3.86424 5.26428 3.90179C5.13288 3.93933 5.03902 3.9581 4.96394 3.9581C4.70114 3.9581 4.56974 3.77039 4.56974 3.37618V2.45638C4.56974 2.15604 4.60728 1.93078 4.70114 1.79938C4.795 1.66798 4.96394 1.53658 5.22674 1.40518C5.88374 1.06729 6.67214 0.785719 7.59195 0.560461C8.51175 0.316432 9.48787 0.203803 10.5203 0.203803C12.7541 0.203803 14.3872 0.710633 15.4384 1.72429C16.4709 2.73795 16.9965 4.27722 16.9965 6.34208V12.424H17.034ZM9.41278 15.2773C10.0322 15.2773 10.6705 15.1647 11.3462 14.9394C12.022 14.7142 12.6227 14.3012 13.1295 13.738C13.4299 13.3814 13.6551 12.9872 13.7678 12.5367C13.8804 12.0862 13.9555 11.5418 13.9555 10.9036V10.1151C13.4111 9.98375 12.8292 9.87112 12.2285 9.79603C11.6278 9.72095 11.0459 9.68341 10.464 9.68341C9.2063 9.68341 8.28649 9.92743 7.66703 10.4343C7.04757 10.9411 6.74723 11.6544 6.74723 12.593C6.74723 13.4752 6.97249 14.1322 7.44178 14.5828C7.89229 15.0521 8.54929 15.2773 9.41278 15.2773ZM24.4863 17.3046C24.1484 17.3046 23.9231 17.2483 23.773 17.1169C23.6228 17.0043 23.4914 16.7415 23.3788 16.3848L18.9675 1.87447C18.8548 1.49904 18.7985 1.25501 18.7985 1.12361C18.7985 0.823262 18.9487 0.654319 19.249 0.654319H21.0886C21.4453 0.654319 21.6893 0.710633 21.8207 0.842033C21.9709 0.954662 22.0835 1.21746 22.1962 1.57412L25.3498 14.0008L28.2781 1.57412C28.372 1.19869 28.4846 0.954662 28.6348 0.842033C28.785 0.729404 29.0478 0.654319 29.3856 0.654319H30.8874C31.244 0.654319 31.4881 0.710633 31.6382 0.842033C31.7884 0.954662 31.9198 1.21746 31.9949 1.57412L34.9608 14.151L38.2082 1.57412C38.3209 1.19869 38.4523 0.954662 38.5837 0.842033C38.7339 0.729404 38.9779 0.654319 39.3158 0.654319H41.0615C41.3619 0.654319 41.5308 0.80449 41.5308 1.12361C41.5308 1.21746 41.512 1.31132 41.4933 1.42395C41.4745 1.53658 41.4369 1.68675 41.3619 1.89324L36.8379 16.4036C36.7253 16.779 36.5939 17.0231 36.4437 17.1357C36.2936 17.2483 36.0495 17.3234 35.7304 17.3234H34.1161C33.7594 17.3234 33.5154 17.2671 33.3652 17.1357C33.215 17.0043 33.0836 16.7603 33.0085 16.3848L30.099 4.27722L27.2082 16.3661C27.1143 16.7415 27.0017 16.9855 26.8515 17.1169C26.7013 17.2483 26.4385 17.3046 26.1006 17.3046H24.4863ZM48.6077 17.8115C47.6315 17.8115 46.6554 17.6988 45.7168 17.4736C44.7783 17.2483 44.0462 17.0043 43.5581 16.7227C43.2578 16.5538 43.0513 16.3661 42.9762 16.1971C42.9011 16.0282 42.8636 15.8405 42.8636 15.6715V14.7142C42.8636 14.32 43.0138 14.1322 43.2953 14.1322C43.408 14.1322 43.5206 14.151 43.6332 14.1886C43.7458 14.2261 43.9148 14.3012 44.1025 14.3763C44.7407 14.6579 45.4353 14.8831 46.1674 15.0333C46.9182 15.1835 47.6503 15.2585 48.4012 15.2585C49.5838 15.2585 50.5036 15.0521 51.1418 14.6391C51.78 14.2261 52.1179 13.6254 52.1179 12.8558C52.1179 12.3302 51.949 11.8984 51.6111 11.5418C51.2732 11.1851 50.635 10.866 49.7152 10.5657L46.9933 9.72095C45.623 9.2892 44.6093 8.65097 43.9899 7.80626C43.3704 6.98031 43.0513 6.06051 43.0513 5.08439C43.0513 4.29599 43.2202 3.60144 43.5581 3.00075C43.896 2.40007 44.3465 1.87447 44.9097 1.46149C45.4728 1.02975 46.111 0.710633 46.8619 0.485375C47.6128 0.260117 48.4012 0.16626 49.2271 0.16626C49.6401 0.16626 50.0718 0.185031 50.4848 0.241346C50.9165 0.29766 51.3108 0.372746 51.705 0.447832C52.0804 0.54169 52.437 0.635547 52.7749 0.748176C53.1128 0.860805 53.3756 0.973434 53.5633 1.08606C53.8261 1.23623 54.0138 1.38641 54.1265 1.55535C54.2391 1.70552 54.2954 1.91201 54.2954 2.17481V3.05707C54.2954 3.45127 54.1452 3.65776 53.8637 3.65776C53.7135 3.65776 53.4695 3.58267 53.1504 3.4325C52.0804 2.94444 50.879 2.70041 49.5462 2.70041C48.4763 2.70041 47.6315 2.86935 47.0496 3.22601C46.4677 3.58267 46.1674 4.12704 46.1674 4.89668C46.1674 5.42228 46.3551 5.87279 46.7305 6.22945C47.1059 6.58611 47.8005 6.94277 48.7954 7.26188L51.4609 8.1066C52.8125 8.53835 53.7886 9.13903 54.3705 9.90866C54.9524 10.6783 55.234 11.5606 55.234 12.5367C55.234 13.3438 55.065 14.0759 54.7459 14.7142C54.408 15.3524 53.9575 15.9155 53.3756 16.3661C52.7937 16.8353 52.0992 17.1732 51.292 17.4173C50.4473 17.6801 49.565 17.8115 48.6077 17.8115Z"
                fill="#252F3E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.1556 26.9347C45.9798 31.4961 37.007 33.9177 29.2919 33.9177C18.4795 33.9177 8.73713 29.9193 1.3787 23.2742C0.796785 22.7486 1.32239 22.0353 2.01693 22.4483C9.97605 27.0661 19.7935 29.863 29.9489 29.863C36.8005 29.863 44.3279 28.4364 51.2546 25.508C52.287 25.0388 53.1693 26.1838 52.1556 26.9347Z"
                fill="#FF9900"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.7273 24.0063C53.9389 22.9926 49.5088 23.5182 47.5002 23.7623C46.8996 23.8373 46.8057 23.3117 47.3501 22.9175C50.8791 20.4397 56.6795 21.153 57.3553 21.979C58.0311 22.8237 57.1676 28.6241 53.8638 31.4023C53.357 31.834 52.8689 31.6087 53.0942 31.0456C53.845 29.1872 55.5157 25.0012 54.7273 24.0063Z"
                fill="#FF9900"
              />
            </g>
            <defs>
              <clipPath id="clip0_746_5586">
                <rect
                  width="57.5958"
                  height="33.7511"
                  fill="white"
                  transform="translate(0.616028 0.16626)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="43"
            height="34"
            viewBox="0 0 43 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3063 9.50652H27.4506L27.3785 9.4344L32.4265 4.38636V4.27819C28.1717 0.528219 22.2944 -0.769849 16.8497 0.852735C11.405 2.47532 7.22236 6.80221 5.70795 12.2829C5.78006 12.2469 5.88823 12.2108 5.99641 12.2108C7.87139 10.9849 10.107 10.2637 12.4507 10.2637C13.2439 10.2637 14.0012 10.3358 14.7584 10.4801C14.7944 10.444 14.8305 10.444 14.8665 10.444C18.1117 6.87433 23.5924 6.44164 27.3424 9.50652H27.3063Z"
              fill="#EA4535"
            />
            <path
              d="M37.2222 12.2111C36.3928 9.14624 34.6621 6.36982 32.2462 4.24243L27.09 9.36259C29.2535 11.1294 30.5155 13.7977 30.4434 16.5741V17.4755C36.5371 17.4755 36.5371 26.562 30.4434 26.562H21.2848V33.7735H21.2487L21.2848 33.8456H30.4434C35.7077 33.8816 40.3592 30.4922 41.9096 25.5163C43.4601 20.5404 41.549 15.1318 37.2222 12.2111Z"
              fill="#557EBF"
            />
            <path
              d="M12.3064 33.8815H21.7895V26.5979H12.3064C11.6213 26.5979 10.9722 26.4537 10.3593 26.2013L4.87854 31.4657V31.5378C7.04199 33.0883 9.63812 33.9176 12.3424 33.9176L12.3064 33.8815Z"
              fill="#36A852"
            />
            <path
              d="M12.7392 10.0836C7.36661 10.1197 2.60703 13.437 0.876273 18.3047C-0.854484 23.2085 0.876273 28.5811 5.13105 31.7541L10.756 26.3816C7.65507 25.0474 6.93392 21.1532 9.31371 18.8816C11.6935 16.574 15.7319 17.2951 17.1382 20.2518L22.7631 14.8793C20.3833 11.8865 16.6694 10.1197 12.7392 10.1557V10.0836Z"
              fill="#F9BC15"
            />
          </svg>
        </div>
        <div>
          <svg
            width="130"
            height="28"
            viewBox="0 0 130 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_746_5597)">
              <path
                d="M129.058 12.6473V10.3855H126.249V6.86897L126.155 6.89806L123.516 7.70521L123.464 7.72107V10.3855H119.3V8.90132C119.3 8.21018 119.455 7.68126 119.759 7.32854C120.062 6.98002 120.495 6.80288 121.046 6.80288C121.443 6.80288 121.854 6.89635 122.267 7.08064L122.37 7.12683V4.74472L122.322 4.72683C121.936 4.58826 121.412 4.51843 120.762 4.51843C119.942 4.51843 119.198 4.69666 118.549 5.05C117.899 5.40381 117.388 5.90894 117.03 6.55124C116.674 7.19277 116.493 7.93367 116.493 8.75358V10.3855H114.537V12.6473H116.493V22.1763H119.3V12.6473H123.464V18.7029C123.464 21.1968 124.641 22.4607 126.961 22.4607C127.342 22.4607 127.743 22.4159 128.153 22.3284C128.57 22.2386 128.854 22.1489 129.021 22.0531L129.058 22.0313V19.7484L128.944 19.824C128.791 19.9257 128.602 20.0086 128.379 20.0702C128.156 20.133 127.969 20.1646 127.825 20.1646C127.281 20.1646 126.879 20.0181 126.629 19.7291C126.377 19.4375 126.249 18.9274 126.249 18.2141V12.6473H129.058ZM108.267 20.1648C107.247 20.1648 106.444 19.8269 105.878 19.1612C105.308 18.4922 105.019 17.5384 105.019 16.3266C105.019 15.0763 105.308 14.0978 105.878 13.4169C106.445 12.7406 107.24 12.3973 108.244 12.3973C109.217 12.3973 109.992 12.7252 110.547 13.3723C111.105 14.0227 111.388 14.9934 111.388 16.2583C111.388 17.5387 111.122 18.5222 110.597 19.1801C110.076 19.8331 109.292 20.1648 108.267 20.1648ZM108.392 10.1014C106.447 10.1014 104.903 10.6711 103.802 11.7947C102.702 12.9185 102.144 14.4735 102.144 16.4172C102.144 18.2633 102.688 19.7482 103.762 20.83C104.837 21.9123 106.299 22.4605 108.107 22.4605C109.992 22.4605 111.505 21.8829 112.606 20.7437C113.706 19.6056 114.264 18.0653 114.264 16.167C114.264 14.292 113.741 12.7961 112.709 11.7214C111.676 10.6463 110.223 10.1014 108.392 10.1014ZM97.6167 10.1013C96.2941 10.1013 95.2002 10.4396 94.3644 11.1066C93.5237 11.7775 93.0973 12.6576 93.0973 13.7225C93.0973 14.276 93.1893 14.7677 93.3705 15.1847C93.5528 15.6032 93.8349 15.9715 94.2095 16.2806C94.5815 16.5873 95.1554 16.9086 95.9162 17.2354C96.5556 17.4985 97.0326 17.7212 97.3355 17.8966C97.6316 18.0685 97.8419 18.2414 97.9605 18.4097C98.0758 18.5744 98.1344 18.7997 98.1344 19.0781C98.1344 19.8702 97.5413 20.2556 96.3206 20.2556C95.8679 20.2556 95.3514 20.1612 94.7856 19.9747C94.2195 19.7886 93.6906 19.5209 93.2137 19.1777L93.0973 19.0942V21.7973L93.14 21.8172C93.5374 22.0005 94.0382 22.1551 94.6285 22.2769C95.2178 22.3987 95.7531 22.4607 96.2182 22.4607C97.6534 22.4607 98.8091 22.1207 99.6523 21.4498C100.501 20.7742 100.931 19.8735 100.931 18.7716C100.931 17.9769 100.7 17.2952 100.243 16.7456C99.7899 16.2004 99.0033 15.6999 97.906 15.2575C97.0318 14.9066 96.4717 14.6153 96.2408 14.3918C96.0181 14.1758 95.905 13.8704 95.905 13.4836C95.905 13.1407 96.0445 12.866 96.3312 12.6435C96.62 12.4198 97.0218 12.3061 97.526 12.3061C97.9938 12.3061 98.4725 12.38 98.9484 12.5248C99.4242 12.6696 99.8419 12.8635 100.191 13.1008L100.305 13.1792V10.615L100.261 10.596C99.9396 10.4581 99.5153 10.34 99.0001 10.2442C98.4868 10.1494 98.0214 10.1013 97.6167 10.1013ZM85.7775 20.1648C84.7587 20.1648 83.955 19.8269 83.3889 19.1612C82.819 18.4922 82.5309 17.5387 82.5309 16.3266C82.5309 15.0763 82.8194 14.0978 83.3895 13.4169C83.9556 12.7406 84.7512 12.3973 85.755 12.3973C86.7282 12.3973 87.5032 12.7252 88.0584 13.3723C88.6164 14.0227 88.8994 14.9934 88.8994 16.2583C88.8994 17.5387 88.633 18.5222 88.108 19.1801C87.5867 19.8331 86.803 20.1648 85.7775 20.1648ZM85.9029 10.1014C83.9581 10.1014 82.4138 10.6711 81.3133 11.7947C80.213 12.9185 79.6547 14.4735 79.6547 16.4172C79.6547 18.264 80.1996 19.7482 81.2738 20.83C82.348 21.9123 83.8097 22.4605 85.6184 22.4605C87.5027 22.4605 89.0167 21.8829 90.1173 20.7437C91.2175 19.6056 91.7753 18.0653 91.7753 16.167C91.7753 14.292 91.252 12.7961 90.2195 11.7214C89.1864 10.6463 87.734 10.1014 85.9029 10.1014ZM75.3926 12.4273V10.3855H72.619V22.176H75.3926V16.1447C75.3926 15.119 75.6251 14.2766 76.0838 13.6402C76.5369 13.0114 77.1406 12.6928 77.8776 12.6928C78.1274 12.6928 78.4078 12.734 78.7115 12.8155C79.0121 12.8965 79.2299 12.9844 79.3583 13.0769L79.4748 13.1613V10.3652L79.4299 10.346C79.1716 10.2362 78.8062 10.1808 78.3439 10.1808C77.647 10.1808 77.0232 10.4047 76.489 10.8456C76.0201 11.2332 75.681 11.7646 75.4219 12.4273H75.3926ZM67.6522 10.1013C66.3799 10.1013 65.2449 10.3743 64.2794 10.912C63.3121 11.4511 62.564 12.2208 62.055 13.1994C61.5483 14.1758 61.2911 15.3162 61.2911 16.5879C61.2911 17.7019 61.5406 18.7243 62.0336 19.6253C62.5269 20.5277 63.2252 21.2338 64.109 21.7235C64.9916 22.2127 66.0116 22.4607 67.141 22.4607C68.459 22.4607 69.5844 22.1971 70.4867 21.6775L70.5231 21.6565V19.1156L70.4066 19.2007C69.9979 19.4984 69.5412 19.736 69.0497 19.9072C68.5595 20.0783 68.1126 20.1648 67.7208 20.1648C66.6325 20.1648 65.7589 19.8242 65.1247 19.1529C64.4891 18.4806 64.1668 17.5368 64.1668 16.3489C64.1668 15.1536 64.5029 14.1854 65.1653 13.471C65.8255 12.7587 66.7007 12.3974 67.7665 12.3974C68.6782 12.3974 69.5665 12.7061 70.407 13.3158L70.5231 13.4002V10.7229L70.4856 10.7018C70.1693 10.5248 69.7381 10.3786 69.2024 10.2677C68.6693 10.1572 68.1479 10.1013 67.6522 10.1013ZM59.3809 10.3855H56.6073V22.176H59.3809V10.3855ZM58.0224 5.36263C57.566 5.36263 57.1678 5.518 56.8408 5.82593C56.5123 6.13479 56.3456 6.52359 56.3456 6.98238C56.3456 7.43401 56.5103 7.81566 56.8355 8.11628C57.1587 8.41597 57.558 8.56791 58.0224 8.56791C58.4867 8.56791 58.8876 8.41597 59.2146 8.11675C59.5439 7.81566 59.7108 7.43401 59.7108 6.98238C59.7108 6.53961 59.5484 6.1547 59.2282 5.83837C58.9084 5.52266 58.5027 5.36263 58.0224 5.36263ZM51.1024 9.5156V22.1759H53.9329V5.72369H50.0155L45.036 17.9439L40.2038 5.72369H36.1268V22.1759H38.7867V9.51435H38.8781L43.9808 22.1759H45.9881L51.0111 9.5156H51.1024Z"
                fill="#F1511B"
              />
              <path
                d="M13.4901 13.273H0.442871V0.225708H13.4901V13.273Z"
                fill="#80CC28"
              />
              <path
                d="M27.8959 13.273H14.8488V0.225708H27.8959V13.273Z"
                fill="#00ADEF"
              />
              <path
                d="M13.4898 27.6839H0.442871V14.6366H13.4898V27.6839Z"
                fill="#0739A6"
              />
              <path
                d="M27.8959 27.6839H14.8488V14.6366H27.8959V27.6839Z"
                fill="#FBBC09"
              />
            </g>
            <defs>
              <clipPath id="clip0_746_5597">
                <rect
                  width="128.615"
                  height="27.6321"
                  fill="white"
                  transform="translate(0.442871 0.225708)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9992 0.166382H22.5985L11.5954 32.7674C11.4823 33.1025 11.267 33.3936 10.9798 33.5998C10.6925 33.8059 10.3479 33.9169 9.99437 33.9171H1.74548C1.4776 33.917 1.21357 33.8533 0.975182 33.7311C0.736809 33.6088 0.530983 33.4315 0.374736 33.2139C0.218526 32.9963 0.116334 32.7447 0.0766041 32.4798C0.0369147 32.2148 0.0608796 31.9443 0.146516 31.6904L10.3978 1.31596C10.5108 0.980823 10.7261 0.689588 11.0134 0.483272C11.3008 0.27709 11.6455 0.166255 11.9992 0.166382Z"
              fill="url(#paint0_linear_746_5605)"
            />
            <path
              d="M27.4012 22.0328H10.5933C10.4371 22.0327 10.2844 22.0795 10.1551 22.1673C10.0259 22.2551 9.92613 22.3799 9.86879 22.5252C9.81145 22.6706 9.79922 22.8299 9.8337 22.9823C9.86818 23.1347 9.94777 23.2732 10.0621 23.3797L20.8625 33.4605C21.177 33.7538 21.591 33.9169 22.021 33.9169H31.5383L27.4012 22.0328Z"
              fill="#0078D4"
            />
            <path
              d="M11.9994 0.166028C11.6418 0.16466 11.2932 0.277654 11.0044 0.488504C10.7156 0.699353 10.5019 0.997012 10.3943 1.338L0.15929 31.6623C0.0678978 31.9171 0.0392077 32.1901 0.0756467 32.4583C0.112086 32.7265 0.212582 32.982 0.368636 33.2032C0.524745 33.4243 0.731746 33.6045 0.972168 33.7288C1.21268 33.8529 1.47949 33.9173 1.75013 33.9168H10.2119C10.527 33.8603 10.8216 33.7214 11.0655 33.514C11.3094 33.3066 11.4938 33.0382 11.6 32.7362L13.6411 26.721L20.9318 33.5211C21.2373 33.7737 21.6205 33.9135 22.017 33.9168H31.4989L27.3403 22.0327L15.2172 22.0354L22.637 0.166028H11.9994Z"
              fill="url(#paint1_linear_746_5605)"
            />
            <path
              d="M25.5371 1.31408C25.4241 0.979484 25.2091 0.688746 24.9222 0.482793C24.6353 0.276827 24.2911 0.166071 23.938 0.166138H12.1252C12.4784 0.166159 12.8226 0.276935 13.1094 0.482867C13.3963 0.688799 13.6113 0.979514 13.7242 1.31408L23.9759 31.6898C24.0617 31.9436 24.0857 32.2142 24.046 32.4792C24.0064 32.7442 23.9042 32.996 23.7479 33.2136C23.5916 33.4313 23.3858 33.6087 23.1474 33.731C22.909 33.8534 22.6449 33.9172 22.377 33.9173H34.1901C34.458 33.9171 34.722 33.8532 34.9604 33.7309C35.1987 33.6085 35.4045 33.4311 35.5608 33.2135C35.7169 32.9958 35.8191 32.7441 35.8588 32.4792C35.8984 32.2142 35.8744 31.9436 35.7886 31.6898L25.5371 1.31408Z"
              fill="url(#paint2_linear_746_5605)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_746_5605"
                x1="15.8623"
                y1="2.66742"
                x2="4.8547"
                y2="35.1868"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#114A8B" />
                <stop offset="1" stop-color="#0669BC" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_746_5605"
                x1="19.301"
                y1="17.822"
                x2="16.7548"
                y2="18.6829"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.3" />
                <stop offset="0.071" stop-opacity="0.2" />
                <stop offset="0.321" stop-opacity="0.1" />
                <stop offset="0.623" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_746_5605"
                x1="17.9003"
                y1="1.71872"
                x2="29.9835"
                y2="33.9102"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0739A6" />
                <stop offset="1" stop-color="#0739A6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </Marquee>
  );
};

export default Partners;