import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-angular-icon',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  template: `
  <svg
        fill="none"
        viewBox="0 0 242 256"
        width="24"
        height="24"
        [class]="class"
        matTooltip="{{nameTooltip}}"
        data-tooltip-id="my-tooltip"
        data-tooltip-place="bottom"
        matTooltipClass="bg-gray-800 text-white py-2 px-4 rounded-lg"
      >
        <g clip-path="url(#a)">
          <mask
            id="b"
            width="242"
            height="256"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style="mask-type: luminance"
          >
            <path fill="#fff" d="M0 0h242v256H0V0Z" />
          </mask>
          <g mask="url(#b)">
            <path
              fill="url(#c)"
              d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
            />
            <path
              fill="url(#d)"
              d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="c"
            x1="53.2"
            x2="245"
            y1="231.9"
            y2="140.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E40035" />
            <stop offset=".2" stop-color="#F60A48" />
            <stop offset=".4" stop-color="#F20755" />
            <stop offset=".5" stop-color="#DC087D" />
            <stop offset=".7" stop-color="#9717E7" />
            <stop offset="1" stop-color="#6C00F5" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="44.5"
            x2="170"
            y1="30.7"
            y2="174"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF31D9" />
            <stop offset="1" stop-color="#FF5BE1" stop-opacity="0" />
          </linearGradient>
          <clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z" /></clipPath>
        </defs>
      </svg>

    `,
})
export class AngularIconComponent {
  @Input() class: String = '';
  @Input() nameTooltip: String = '';
  

}
