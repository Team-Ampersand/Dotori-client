import * as React from "react";

function DotoriLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={192} height={248} fill="none" {...props}>
      <path
        d="M171 75c0 41.422-33.578 75-75 75s-75-33.578-75-75S54.578 0 96 0s75 33.578 75 75z"
        fill="#617BE3"
      />
      <path
        d="M74.807 66.777a4.395 4.395 0 00-6.216-.002c-8.884 8.878-7.675 21.126-5.34 35.049a4.394 4.394 0 108.667-1.452c-2.382-14.216-2.559-21.939 2.886-27.38a4.394 4.394 0 00.003-6.215z"
        fill="#fff"
      />
      <path
        d="M146.122 80.833c.18-2.828.042-5.78-.432-8.827-1.502-9.657-6.231-19.28-13.435-27.467l6.45-6.449a4.395 4.395 0 00-6.214-6.215l-6.479 6.476c-8.087-6.98-17.533-11.561-27.013-13.035-11.365-1.767-21.457 1.088-28.413 8.043-2.681 2.683-4.777 5.871-6.224 9.478a4.396 4.396 0 00.97 4.745l.533.532-7.365 7.36c-8.994 8.987-13.358 22.726-12.616 39.73.29 6.647 1.303 12.461 2.103 16.166 1.584 7.333 2.382 8.13 2.965 8.713.66.659 1.137 1.135 6.148 2.369a97.518 97.518 0 0010.601 1.967c3.34.433 7.362.776 11.721.776 5.896 0 12.406-.63 18.66-2.517a4.395 4.395 0 10-2.539-8.413c-15.264 4.605-32.616.658-38.009-.805-.943-3.406-2.671-11.058-2.914-19.887-.266-9.677 1.268-23.065 10.092-31.882l7.369-7.361 44.633 44.634-7.348 7.341a4.394 4.394 0 006.211 6.218l7.352-7.345.494.494a4.4 4.4 0 004.745.972c3.607-1.449 6.796-3.543 9.478-6.224 4.993-4.995 7.874-11.603 8.448-19.14.016-.15.025-.298.028-.447zm-26.654-36.505c-2.968 1.623-6.78 1.187-9.293-1.313a7.72 7.72 0 01-2.259-5.935c4.024 1.792 7.928 4.236 11.552 7.248zm-1.12 18.336a7.625 7.625 0 01-8.177-1.697c-2.289-2.289-2.81-5.684-1.57-8.48a16.682 16.682 0 007.99 1.558 16.48 16.48 0 001.757 8.62zm-17.305-17.373c-2.73 1.01-5.927.426-8.118-1.754a7.538 7.538 0 01-2.24-5.377c0-.99.191-1.953.554-2.847a16.42 16.42 0 007.886 1.553 16.564 16.564 0 001.918 8.425zM93.3 54.068c.077-.077.146-.157.214-.238a16.616 16.616 0 005.684.701c-.2 3.142.497 6.328 2.091 9.142-2.443 1.68-5.819 1.438-7.989-.732a6.283 6.283 0 010-8.873zm14.403 15.914a16.421 16.421 0 007.853 1.997c.2 0 .4-.008.602-.015a16.48 16.48 0 00.921 6.079c-.204.207-.4.421-.59.639a6.22 6.22 0 01-3.662 1.186 6.236 6.236 0 01-4.438-1.838c-2.188-2.188-2.412-5.602-.686-8.048zm17.732-.154a16.386 16.386 0 007.628 1.885c.237 0 .475-.01.713-.02a16.554 16.554 0 001.734 7.88c-2.772 1.17-6.101.63-8.356-1.624-2.191-2.191-2.764-5.397-1.719-8.12zm2.174-9.194a7.688 7.688 0 01-2.269-5.476c0-1.407.373-2.758 1.074-3.938 3.078 3.65 5.579 7.589 7.414 11.655a7.701 7.701 0 01-6.219-2.24zm-42.043-12.15c-2.415 1.352-5.536 1.013-7.59-1.031a6.205 6.205 0 01-1.845-4.429 6.21 6.21 0 011.844-4.43c.12-.118.23-.243.332-.37a19.468 19.468 0 013.752-2.37 16.748 16.748 0 00-.163 2.306c0 3.806 1.293 7.412 3.67 10.324zm47.418 43.957a4.412 4.412 0 00-.701.57 6.282 6.282 0 01-8.874-.001 6.232 6.232 0 01-1.838-4.437c0-1.111.293-2.176.832-3.115a16.364 16.364 0 0012.848 3.274 19.583 19.583 0 01-2.267 3.709z"
        fill="#fff"
      />
      <path
        d="M14.85 187.28c6.673 0 11.752 1.687 15.235 5.06 3.483 3.373 5.225 8.14 5.225 14.3s-1.742 10.927-5.225 14.3c-3.483 3.373-8.562 5.06-15.235 5.06H4.675v-38.72H14.85zm0 37.73c6.38 0 11.202-1.613 14.465-4.84s4.895-7.737 4.895-13.53c0-5.793-1.632-10.303-4.895-13.53-3.263-3.227-8.085-4.84-14.465-4.84H5.775v36.74h9.075zm45.548 1.43c-3.556 0-6.747-.825-9.57-2.475-2.787-1.687-4.968-4.033-6.545-7.04-1.577-3.007-2.365-6.417-2.365-10.23 0-3.813.788-7.223 2.365-10.23 1.577-3.007 3.758-5.335 6.545-6.985 2.823-1.687 6.014-2.53 9.57-2.53 3.557 0 6.728.843 9.515 2.53 2.824 1.65 5.023 3.978 6.6 6.985s2.365 6.417 2.365 10.23c0 3.813-.788 7.223-2.365 10.23-1.577 3.007-3.776 5.353-6.6 7.04-2.787 1.65-5.958 2.475-9.515 2.475zm0-.99c3.227 0 6.16-.752 8.8-2.255 2.64-1.54 4.712-3.722 6.215-6.545 1.54-2.86 2.31-6.178 2.31-9.955s-.77-7.077-2.31-9.9c-1.503-2.86-3.575-5.042-6.215-6.545-2.64-1.54-5.573-2.31-8.8-2.31-3.227 0-6.16.77-8.8 2.31-2.64 1.503-4.73 3.685-6.27 6.545-1.503 2.823-2.255 6.123-2.255 9.9s.752 7.095 2.255 9.955c1.54 2.823 3.63 5.005 6.27 6.545 2.64 1.503 5.574 2.255 8.8 2.255zm46.53-38.17v.99H95.653V226h-1.1v-37.73H83.278v-.99h23.65zm22.865 39.16c-3.557 0-6.747-.825-9.57-2.475-2.787-1.687-4.969-4.033-6.545-7.04-1.577-3.007-2.365-6.417-2.365-10.23 0-3.813.788-7.223 2.365-10.23 1.576-3.007 3.758-5.335 6.545-6.985 2.823-1.687 6.013-2.53 9.57-2.53 3.556 0 6.728.843 9.515 2.53 2.823 1.65 5.023 3.978 6.6 6.985 1.576 3.007 2.365 6.417 2.365 10.23 0 3.813-.789 7.223-2.365 10.23-1.577 3.007-3.777 5.353-6.6 7.04-2.787 1.65-5.959 2.475-9.515 2.475zm0-.99c3.226 0 6.16-.752 8.8-2.255 2.64-1.54 4.711-3.722 6.215-6.545 1.54-2.86 2.31-6.178 2.31-9.955s-.77-7.077-2.31-9.9c-1.504-2.86-3.575-5.042-6.215-6.545-2.64-1.54-5.574-2.31-8.8-2.31-3.227 0-6.16.77-8.8 2.31-2.64 1.503-4.73 3.685-6.27 6.545-1.504 2.823-2.255 6.123-2.255 9.9s.751 7.095 2.255 9.955c1.54 2.823 3.63 5.005 6.27 6.545 2.64 1.503 5.573 2.255 8.8 2.255zm47.629.55l-10.34-16.885h-9.735V226h-1.1v-38.72h9.68c4.254 0 7.407.972 9.46 2.915 2.09 1.943 3.135 4.602 3.135 7.975 0 3.117-.88 5.61-2.64 7.48-1.76 1.87-4.271 2.988-7.535 3.355L178.797 226h-1.375zm-11.385-17.93c3.777 0 6.6-.898 8.47-2.695 1.907-1.797 2.86-4.198 2.86-7.205 0-6.527-3.813-9.79-11.44-9.79h-8.58v19.69h8.69zm20.744-20.79V226h-1.1v-38.72h1.1z"
        fill="#617BE3"
      />
    </svg>
  );
}

const MemoDotoriLogo = React.memo(DotoriLogo);
export default MemoDotoriLogo;
