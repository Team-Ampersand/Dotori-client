import * as React from "react";

function Damage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 442 442" fill="none" {...props}>
      <path fill="url(#prefix__pattern23)" d="M108 84h250v250H108z" />
      <rect
        x={25}
        y={25}
        width={392}
        height={392}
        rx={196}
        stroke="#FF6868"
        strokeWidth={50}
      />
      <rect
        x={25}
        y={25}
        width={392}
        height={392}
        rx={196}
        stroke="#FF6868"
        strokeWidth={50}
      />
      <rect
        x={5}
        y={5}
        width={432}
        height={432}
        rx={216}
        stroke="#000"
        strokeWidth={10}
      />
      <rect
        x={55}
        y={51}
        width={340}
        height={340}
        rx={170}
        stroke="#000"
        strokeWidth={10}
      />
      <defs>
        <pattern
          id="prefix__pattern23"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_672_111" transform="scale(.00195)" />
        </pattern>
        <image
          id="prefix__image0_672_111"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13vCZVffjxzy7LsgWWXZoURSCKSrMgihULgh2jIoigaIxGTSyxRBM1Rn9GTaKov2jU2FCxRwQxaBRUBAvlpyiC2OgidYHdZdl6f3+c++Q+XG557jln5kz5vF+vee3d3Tsz35k79znfORUkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSWqreaUDkCQJOBg4CnggsDVwNfAj4LPAtQXjkiRJFdgd+BYwNs22Dng7sGWpACVJUl57E970pyv8h7eTMQmQJKn1tgIuZLTCf7C9o0ikkiQpm1cwt8J/DFgP3L1EsJIkKY9fMPcEYAz4+xLBSpKkdPcmrvAfA04rEG8nzS8dgCSpd56RsO/dskXRcyYAkqS6PT1h33XZoug5EwBJUp12BB6WsP+FuQLpOxMASVKdngZskbD/d3MFIkmS6nMK8R0AbweW1h+yJElKsQRYQ3wCcGr9IXeXTQCSpLocRkgCYp2SKxBJklSfTxH/9r8J2Ln+kCVJUootgOuJTwDOqT/kbrMJQJJUh0cQhgDGsvo/MxMASVIdjkjc3wRAkqQW+g3x1f+XFIi386wBkCRVbV/CAkCxfPuvgAmAJKlqVv9LktRDPyW++v9P+LIqSVLr7ApsJj4B+Fj9IfeDWZUkqUpPB+Yl7G/1vyRJLXQ68W//q4FF9YcsSZJSbA2sJT4B+Gr9IfeHTQCSpKo8mbQ3eKv/JUlqoZOIf/vfCOxQf8iSJCnFlsDNxCcA36s/5H6xCUCSVIVHAysS9rf6v2ImAJKkKqTO/ndqligkSVKt/kB89f+FBeLtnQWlA5Akdc4DgT0T9m9z9f9C4BHAvQgjIK4EzgJWlgxKkqQ6vI34t/8x4MDaI063FfBmpu74uAE4EbhHsegkSarBz4gv/K8mbergEnYCfsTs13Y98PBCMUqSVKndSVv859/rDznJTsBFjH59NxGaByRJ6pRXklb9/4T6Q462E/BL5n6Np5cIVpKkKp1BfOF/C6ETXRvM9c1/8rZf/SFLklSN5cB64gvFL9QfcpTUwn8MeH3tUU/iRECSpFyeQpgCOFYbhv/tRKjl2DfxOHtliCWJ8wBIknJJmf1vA/CtXIFUZCfgTNILf/AFXJLUEVsBtxJfJf7t+kOekxzV/sPbm+oNX5KkajyJtALx5fWHPLLchf8Y7ZzsSJKku/gI8YXhZpo7S17sUL+ZtrNqvQJJkioyD7iK+ALxvPpDHkkVb/6rgf3rvAhJkqryENIKxTfXH/Ksqij81wNPr/MiJEmq0jtJKxib9kZcRbX/euDP67wISZKq9iviC8bLCsQ7Ewt/SZJG8GekFY7vqz/kaVn4S5I0oteSVkAeUn/IU7LwlyRpDs4ivoC8iWbMSGvhL0nSHGxPmMI3tpA8sf6Q78LCX5KkOXoBaQXls+oP+U4s/CVJivBx4gvKO4Bt6g/5f1n4S5IU6fvEF5an1R/u/7LwlyQpwZnEF5h/WSBesPCXJClZ7AJAm4CdC8Rr4S9JUgbPIK7QPLNArBb+kiRlsgC4lLkXnE+pOU4L/ynMKx2A1DBbAluPf70FsGz863nA8knfuxhYNMIxV4zwPYvGjzeb5dz193YDYYnR2awCNs7yPRvHv282q8fPO7AJuG38683ArUP/t3KE46m9HgWcQfjdGcVJwLHVhXMXOxHi2y/jMTcARwEnZzxm7UwAVMKgMI39E+5aIA8XjMsIhTeEwnzwwbQUWDj+9XDhvRWwJMuVaTa3EhIECAnDpvGvhxOK24F141+vJQwXY/zfbh//ejjpGSQt64E1Q/usGf+3wXluGf/zVkZPdDSaZwGfZfYk9uvAc5n4mVbNwn8GJgCabPAGvIzwy7wU2JZQWA6+XkwoMJePf72Yibfcmf6c6i1aKmmQVAyShkEiMkgaVjJRozFIOgb7DBKVwT6D5Gbl+NdXEhKQvrgv8C+E6v35k/7vcuCfgU8wkQBWzcJ/FiYA3bUMeBxwL2AHQuG9ePzftx7/epvxbdHQ102Yl1vqgtXAqcC7gIsKx1Kn3YBHArsQEqmLgAuYqO2pg4W/emk58EHC20nODi9ubm5x23rgb1Fd7PA3ImsA0mxNqNoebNtN+vvkbQz4I2H1rM8RVsLKaS/gfwjrc0tqltcC7ysdRMf55j8HJgDBtsCOhJWtJm8zFeij9nqdyhrgzcAHCIlBqm2A84G9MxxLUn4bgAMJb6fKz8J/jrqYAOwwvk0uyKf79+0p2+79UeBlpCcB/wq8Lj0cSRX6IqEXvPKy8I/Q1gRgAXAAcPD4n/cEdgf2ZLSx1E3zcuA/EvZfDFxH2ZW1JM1uNeFFZN1s36iRWfh33DxC1dnbgbPpXge3lUxMPhPjcQ24Bjc3t9G2g1AudvhL0PQhX48EjgGeBty9cCxVWk6YSOPEyP33yBeKpIo9GDivdBAd4Jt/oiYmAMuAownV4vcvHEudDiY+AWhrU47URweWDqADlmHhn6xJCcCOwN8Bf0WYtKZvdkvY9/fZopBUtQeXDqADTsTCP1kTEoDtCb3X/5q0dvC2W5Ow708I85w7za7UfPsSOu6uLR1ISx1CWIY4l14W/nDX+ZrrPvfLgN8Bb6TfhT/AzxP2vQP4WK5AJFVqAf1q3szthRmP1dvCH8q1HR9AGP9+cKHzN81mYB/CutqxtibMt+1EQOmGl7aFO69UN/n/BivOzWR4BbyZDFazG8VthImoRh32OtUywlMZZWXE4VUV5xMm0hrl/zThr4EPlQ6ipX5LWOMkVa8Lf6i/CWA+Yfa7N5M2i17XfJG0wh9CIXU48B3y/HJUbXjltMFqaxsJBUhs297ZhBXHpiusZyrIJ69vr/yWEBIMuGtyMNv/fZ74vkHfHz/GFoQZPAfHH6x8WYL9AOLtlOEYvS/8od4agLsBJwGPr/GcbfB74CHAzZmOtwx4B/CXxE2KNCiMB+uq30YoHNcS1k+/bfzrNdx5nfXNTKy3fhsTb7N3jH//5KVTp/M8wjoJMU4Cjo3cV822kvg+LisIz+Z0FjGxxPVWTKyKuZyQLCwf//s2TNSQLAYeARwaGdMvCTWhmrurSBsWbuE/rq4agMcAXwB2rul8bXEeoTNLrsIfQuH7KuCtwKMJtQELmSiQb2WiQL5l0teDQlrqkzvGt5Vz3O9w4hOAfQiJxO2R+/fZL4lPACz8a3YMoVApPftWU7ZNhIL/JYQqSd3Z84i/t7E1B2q+lcQ/F1WNjtk+IaYx4OEVxdV1L8IZ/rKougbgdcC/0N2JajYSPphG3W4mVPmnDPmT1Aw3AZcTPxPng4Ef5QqmRz5LGDl27zns45v/FKpMAP4FeH2Fx89pA+GXeXi7cXy7iekL9FUlgpXUGOcTnwA4I2CcDcBzCJ1+R+kYauE/jaoSgLdTrvDfDPwJuJ5QeN/AXQv3mwhv44P/u23KI0nSzC4Anh25ryMB4v2csAja15h5FtUbCMnC92uIqXWqSADeALylguNO5WbgHODc8e13wNXMPi5bknK4IGHf+xJGFliTGOdc4H6ETs/HjH898DtCx/MTmHvnzrbbETgMeBBhmOsawnN6CmEUVmVeTHgDr7IT3dXAewnTQdqJrnvsBKipNLETIIQhhimfeY+qMLa+2QbYi35OPnUvQp+7swh906Z61m4BXktF5ebDqLa3//8QenA2Yf0CVccEQFNpagIAoWNvbGyvrjg2dde+wNsI/VDm8sx9g4lJt7LYmfBmXkXBfzZhPLv6wQRAU2lyAvClhNg+W3Fs6o4FwCOBD5Be3r4/Z1DnJAYz1fYbnDWwj0wANJUmJwBvSIjtkopjU7utIHwmfpnQWT1X+boJOCBHdfrfkXdCi03Au4H/Q5idS5Ka7PyEfe9DaLO+NVMsar97AkcATyf0daui2XuwGm+SfQhTyebKSq4DnpAalFrNGgBNpck1ANuS1hHwkIrjU/PtS3iZPpvqO9IPtotTMosFwGcIC2nk8GPCvPjXZzqeJNXhVsKws7nMTDfswcAP8oWjFtiSkPgN3vR3LxDDPVMSgFeQbyarU4Hn4sIYktrpAuITAGcE7IdlwBMJhf6Tqb5majYbYhOAbYE3Zwrii4QlXDdlOp4k1e0C4OjIfZ0RsLt2BJ4EHElo3s46/C7RRbEJwJuAHTIEcCrwfCz8JbVbSkfAexHeBm/JFIvK2gt4GqHQfzjNXQzvtJiddiNU1ad2QDibZmVDagY7AWoqTe4ECGEWuk0JMT6uhhhVjS0Ic9W8l9AXpI4OfKnbzcCOMTUArwIWR+w37FrC6kzrEo8jSU2wCvgtYVhfjAOBM/OFU6vFhPHqN9KfdViWAIcTOvA9lTw14nUZIwwBvGGuCcDWhPn+U2wEngVck3gcSWqS84lPANrQD2AeoXr7gUPbA4Bdxv9/A3AR8HHg03SvU/dOhKr9I4BDSX8RLmEd8DeE2Svn7G9Ir3p4Z1L46jqbADSVpjcBALwmIcbf1RTjqBYQxqY/nzAx2zcIb/ijXs+vgf1rjzq/vQlL259NWhNP6W0jYenkA1JuxqWJQVyE7f6amQmAptKGBODRCTFuBrarKc7JtiY0QTyfMM/82eTp53UzoYNj2+xA6Oh+MeUL7pRtLaGj318S1utJclCGgJzlT7MxAdBU2pAAbE3aW+KhNcR4N8JY9DcSqoF/kxjzbNv5NLcX/FSeBdxE+cI7drsROHH8OpbOdrFz6QNw1By+dyrfAr6TeAxJaqrVhKrvfSL3fzDw3XzhsCvhzX6w7UNow6/TgcBTiBxyVrNjCYXn/NKBzNFlwCnj29mE6v6RjJoAzAOePfe47iTXxEGS1FQXEJ8AxM4IuCWhvf4BTHTMewBh5rkmOIrmJwB7Ah+hPYX/xYR+GacxsRrvnI2aABxEWKEo1vcJvxiS1GUXAMdF7jvKSIBtCB25BgX9A4H9gIWR56zDA0sHMIK3MkKVeUGbgJ8AXyF05rsqx0FHTQAem3ieExL3l6Q2SJkRcA/C1LE3jP99BeHNfrga/7605y11INeCcVXZEnhO6SCmcCtwOqFq/3QqWDJ61ATgkIRzXAd8M2F/SWqLnxPe1raI3P/9hE6LDyC04XfB6tIBzGIfwsQ+TXA1YYr8rxNWiKx0YqVREoAtCPMZx/oqzvUvqR/WAJcQquVjHJMxlqb4TekAZlG6r0SW9vwYoyQABxBW/4v11YR9Jaltzic+Aeiii0sHMIuVNZ9vI/BDwpv+KYRe/EWMkgDsm3D824EfJewvSW1zAXB86SAa5FelA5jFJYS1HLap8BxrCEPhTyU0id9U4blGNkoCsHfC8X9MfxaHkCRwxNNkTa8B2ESYFCl1nZvJ/kSo2j8FOAO4I/Pxk1WdAJyTsK8ktdHPCAvjbFk6kAbYQFglseneARxNmM0xxa+ZmJTnp4QpnhtrlAQgdnUraH7mJ0m53UGoVk5aeKUjfks7aoGvJKyF8GXmNkPuZkJN96DnftM7PN7JKBeaMgFQq26GJGVyPiYA0Pz2/2EnA08FPsnMQzDXEqZsPoVQxX999aFVY7YEYBFpC2k0bYlLSarDBcCLSgeRwTWEYXKxHeTaVgv8bcJkSy8EnsHEHAF/JDRpnzb+PbeXCjCn2RKAXYlfyek2Qs9KSeqblBkBS7mWkLgMtvMIHdkuJz4BaFMNwMAq4IPjW6fNlgDsknDsPybsK0lt9gtC23cT5+hfB1xE6Kz4M8Lshb9g6hn7tgZ2TzhX22oAemWUGoBYJgCS+uoO4Czg0MJx3Ab8kvBG/ytCgXweIQkYxf2IrwVuywiA3qqyBuDahH0lqe0+Sb0JwDVMvNH/fPzrPyQeM2UiuLaMAOgtmwAkqRpfAl4OPDLzcTcTCtdBIT/Ybphpp0j7JOxr9X/DVdkEYA2ApD7bDBxJWNUtdkK14fb6QYE/XXt9FVJqANrYAbBXbAKQpOr8CTgY+DBwFDO3p9/KRCE/+PMSQlt6KdYAdJidACWpWiuB5wLvBJ4NPICwwuqNhKljc7XX57Y1aRPBWQPQcPYBkKR6XDS+tYUjADpu/gz/twhYkXDsPyXsK0kqyxEAHTdTArALabMA1tVJRZKUX0r7v9X/LTBTAmD7vyT1V0oNgB0AW2C2GoBYJgCS1G4OAey4qmoAHAIoSe3lGgA9YA2AJGkyRwD0QFUJgDUAktRejgDoAZsAJEmTOQKgB2ZKAO6WcFybACSpvRwB0AMzJQA7JRzXSYAkqb0cAdAD0yUA84EdEo57XcK+kqRyHAHQE9MlANsz+zoB01lHmAlQktQ+jgDoiekSgJTq/+uBsYT9JUnlOAKgJ6pKACRJ7eQIgJ4wAZAkDXMEQE+YAEiShjkCoCemSwB2TDimCYAktZMjAHqkihqAGxL2lSSV4wiAHrEJQJI04AiAHjEBkCQNOAKgR0wAJEkDjgDoERMASdKAIwB6ZKoEYCtg24Rj2glQktrHEQA9M1UCkPL2fytwR8L+kqQyHAHQM1Mt+GP1vySVtQuwP6E2diOwirDQ2u3AGkJv+9uATcDKTOd0BEDPmABIUnM8CXgrcPAc95ucJNzOxMqsgyRh0/jfJ3/PqvH9D0+I+ypgr4T9R7EGF5vLygRAksqbD5wAvDJy/wXAinzhzNnhwO9rOM964HvAR4Cv13C+TpuqD8AOCcezA6Akzd17iC/8+2QhIdk4GfgWZZOe1psqAdg+4XgmAJI0NwcDry0dRAsdDnwXWFI6kLbKnQDcmLCvJPXR64nvfd93DwLeXTqItsqdANyUsK8k9c2WwJNLB9FyfwXsVjqINsqdANycsK8k9c3uwKLSQbTclsAzSgfRRlMlANslHM8aAEka3RalA+iIA0oH0EY2AUhSOdcBm0sH0QE7lg6gjXLXANgEIEmjuxW4oHQQHTDdwnaaweSbtgRYHHmszcAtaeFIUu98qHQA6qfJCUDK2/8thKkmJUmjOwk4q3QQ6p/JUwHb/i8123bAw4G7E1ZguxQ4FxdiabONwHMIM9s9oHAs6pGcCYDt/1J1dgXeBRxNmA512PXAe4H3YyLQVtcBjwbeCbyMqddpkbKa/JA5BFBqnmMI7cTLp/n/nQhzyT8XOA64qKa4lNcqwnoA7wSOAPYDdh7/v0VM9M9aAGwz/vU87vxcLGNiaOESYKsK41XL2QQgNdcK4MOEt/5RPAA4D/h74AM4vKytrgM+lvmYC4Gl41/PB7Yd+r/lTExFvDVhYh1ITzrmes4lTCQ8qoFNAFIzPR74NKGtfy4WAe8DngocT1inXVrPnZuHmvjCdgQu8VurnKMAmvhASW2ziLC4yf8w98J/2OOAXwIvyRGUpO6ZnABYAyCVsx/wE+DvyDOxybbAR4Evk/a7LamDrAGQypsPvIowI9z9Kzj+kYSOga46J+l/5awBMAGQ5u6ewPcIQ/gmD+/LaWfgNEKNwJIKzyOpJSYnACsSjrUyJRCph44Efk4Y/12HeYQ+AecDB9Z0TkkNNTkB2HbK7xqNfQCk0ewInExom59ubH+V7kfoa/A2XI5W6i1rAKR6HU54639G4TgWAP8InA3cu3AskgoYTgAWEN82OEaYxUrS1BYTJuc5nTCtb1McTEhIXlU6EEn1Gk4AUqr/VxMWtJB0VwcDFxKmeZ03y/eWsITQCfFkQvOEpNHNB/YnTN71KNJq0muVKwG4NTUQqYMWAP8E/JB2VLM/gzB50FNLByK1wF6EWr1rgF8A3yUs63wzcAZwWLnQRjOcAKR0RjIBkO7sPsCPgLfSrpXd7gZ8gzBccOks3yv10YOBLwG/IdTqTbV+weOAbxOm5W5sR1trAKS8BkPtLgAOKhxLipcQagMeVToQqSEeSUiOzwOew2gF+2sIy3g3kgmAlM8uwH9T/dvzHcAbCcMIq7QncCbwdiZWiJP6ZCHwAkIy/EPimsdeBxySM6hcciUAt6QGIrXcswjtgE+s+DwXEmoW3gMcBRxLtb9/C4C3AOcQmjWkPtgWeD3wB8KqnPslHGse8IYMMWVnDYCUZhnhjf+rwA4VnmcM+CDwUMK8/gMnEdYP+F6F54aQdPyMfAsVSU20M2GCrMuAfwF2y3TcwwgrfTaKCYAU79GEN/Kql9y9AngsYaz+uin+/0rgUEJV4x0VxrGYsFTxNwnNHVJX7A+cSPhd+0fyD+VbANw38zGTmQBIc7cl4S3hTGCPis/1FeCBwA9m+b7NwHsJc/z/rOKYnghcDDyv4vNIVRt07LsQeD7VLsi1U4XHjmICIM3NPsBPCW8JVQ7vuYXQvv8c5jbN9sWEZoJ/AjZVENfAcuBzhI6IrZn4RCKUe08DfsxEx746JujapoZzzInzAEijGQzvO4/wRl6l7xA6HZ0Uuf8GQg3Fo4DfZ4ppOoMVDR9T8XmkVEsJv8OXAKcSZuis09Y1n29W1gBIs7sHYWavjxK/XsYo1hKG9z2RMLtYqh8DDwI+luFYM9md0BzyAWCris8lzdWOhIT4CsLv8N6F4mh0DYDDAKW7GrzhPrbi85xHKKzfQ2jPz+U24KWEYYo3ZjzuZPMIs6JdADygwvNIo/ozQlJ6OaHJbvui0XQ4AbAGQF2zLfBZQhv3dhWeZyOh0H8k8OsKz/M1QrPCNyo8B8C+wE9wuKDKORD4DHApISmtstZuLmwCkFrgUMJY+2MrPs9lhDnD3wisr/hcANcBRxBqBNZUeJ6tCMMFf0hYMEWq2qBj33eA84HjaN4c/I2rARi2hjDZSMyW0oFQGvY84p/DzyWeezGhynBzQgyjbqUX27kPcO4UceXeBqMZUq1MiMHPp3Y4gvifcR2/s6nbp/LdqjwGNQBbED78YowR2hmlNtufUHX9SqodEnQ99byFz+ZS4OGE2ocNFZ5n0JTyFcq3waq76hjGl6pxNQCDBGAp8TfwdvJ2WpLqNJ8ww975wAEVn+t0Qge5Uys+z6iG+x/8puJzPRv4FfCUis8jNVVj+wCkBLY6RyBSAXsQ5tB/P9XOAHY78GrgycC1FZ4n1rmExOSDhBq9qtyN0AmxdPOHVEJjawBMANQ3f0FYve/RFZ/nHELzwgcqPk+qtYSakKcROgtWZXhCpQMrPI9Uhf+XsK8JgFTYjsDJwMep9hdyI2E63kMIS4q2xTcJCcvXKz7P/Qh9Lt5NWFtBaqrNwGnAw0hrwmpcAjDwaOJ7Np5dIF51V5WjAA4nzLBXdW/fi+nG2+2RpPW+H3X7CXDvWWJxFED3pYwCqGK7gzCfwH2GYtwm4Xg35LhJVXgy8Rf1rQLxqruqSAC2JrQ7V/2BsZlQ1R87oqaJ9iSM56/63q0CXjxDHCYA3bYU+AjVP2ejbNcDbwV2mCLOLRKOW+VS3UmeQ/xFfbVAvOqu3AnAQwhD3qr+0LiWkEh30WCkxDqqv4+nA7tMEYMJQDfNI9Q0XU71z9Zs2+8Jz/lsMweuTThHlZ2No72I+Av6dP3hqsNyJQALCNPRrk843qhbX8a470dYF6Hq+zmYK2GYCUD3HERoQq76eZptuwB4PqPPHHhTwrmqnFY82iuJv6APFYhX3ZUjAdiLej5YbiH0aO+TRYSOe5uo/v5+hokOyiYA3bEb4Wdbcva+zYQhqYdGxH9lwnnvGXG+yv098Rf0ngLxqrtSEoCTCAXy6oRjjLqdQVgmuK8eD1xF9ff5MuBRmAB0wRJCrdwqqn9uptvWEZKPfRKu45KE8++XcN7KvJP4C3prgXjVXSkJQB1t1GuBv8WV7gBWAF+g+nu+kbQaBxOAsuYR1oOoI2GcbrsZ+Gdg5wzXc15CHA/LcP5sFoz/mTIrl/MAqCmq7mBzEWGVsZ9XfJ62WAk8l7DU8Eeorn2zaau6aXQHAScAjyh0/iuA/yA8n7lWrb09Yd9GTQfsREDS7MYI0+Q+GAv/qXwF2JfQg1+CiXb+n1Km8L8QeAFhfon3kHfJ+pRFvBo1GZAJgDSzK4DHMTEMTlP7E2GWtJeS9oakdhu08/+aUFtW9yp95wBPBx5ISECqWOnSBGCICYC66iuED5LvF46jLcaAjxGqfVPmTFf7DMbzX0wYJVJnVfdgqt6HEFa2/AbhWayKTQBDTADUNTcCzyJMkLWycCxtdDGhs9N7CJ331G0PA34MfJl6h7mtAt5HmK3yaYTOeXVIKfOsAZAa7HTgAELHNsVbD7wReCxhKJ+65x6EobfnAA+t8byrCaPPdgdeSxiXX6eUJoDZZhmsVY4EIOVmSE2xFng1oR372sKxdMkPgfsTmgbUDYN2/ouBY6ivnX+MiQ6n7yBMxFVCShPAVtmiyOgK4sc11lnlo+5LmQcgdjuXO6/4pWo8k7AiWt0/X+cByKPkvP0/pTlj6F9P/HV8sEC80xrUAKSsXrY2RyBSARsJ7dSPJCwYpGp9jfD29o3SgWjODiLU5tTdzn81YTjfwYR+Bk2QUuu9KFsUGaVMzdioTg1qvbpqAP5AKPhVxvOpb0pYawDilZq3fw3wNpq5tPbxxF/XZ+oPd3YbiL+gLQvEq+6qIwEYXmRG5exJeKs0AWieUvP2bybUMuxe/SVGO5L46/tKgXhntID4i9lYIF51W5UJwHWESULUHHUs22wCMDrb+Wf3ZOKvsXHNX1sTfzEOAVRuVSUA/w3sUuN1aG4OIsweZwJQzkHUs4z25O0qQpNQ3bMGxjqE+Gv9ToF4Z7Qj8RdzQ4F41W1Hk/fD5TbghbVegWItJSzckru92eaemQ3G89fdzr8K+Aea2c4/kwcTf81nF4h3RvcgLXOTcno8+T5gfgzcq97wlcFhhN7fOZ6BG2uOvU1s549zP+Kv/fwC8c5ob+Iv5jcF4lW37UjoW5LyAbOOMAudy8i21w7Af5Fe2Pyw7sBbYB5wLOEFrs6Cf4zwBvzg6i+xUnsQf/2/qj/cmR1A/MX8okC86r5vE/9MXkRYwEfdcDxhKdfYOWoNUAAAIABJREFU5+H4ugNuuIcBP6H+gv9y4Cja084/k12Jvw+/LxDvjB5K/MWcWyBedd9BzL0WYDNwAg2daENJ9gDOYu6fT7/B52FgK8LCObbzp9ue+PtxTYF4Z3QI8RfzgwLxqh9ew+jP4VWEvgPqri0I7dXrGO2ZuJXQVqsw4+vXqLfg3wR8mvC23DUpI+duLhDvjA4n/mK+XSBe9ceLCTOCzfQMfhZYUSpA1e4BwIXM/ExcBOxfKsAGegP1Fv5daOefyULi703KQkKVeAbxF/P1AvGqX3YF3g1cwsTb3x8Jw5YeUTAulbOAMD/8GYS5SMaAlYRmgpfQrermVNsSVs2ro+C/nO60889mE3H3aDMNuz8p466/WCBe9dvC0gGocXwmpncU1Rf8XWznn81a4u9XY/qlLCDth3ZHrkCkEa0vHYAax2dieo+t8NibCU1wf0+oleuTdcQX5ItoSNm5gLRsxKWAJam57l/Rcc8FXk1zluitW0rS2ZgagPmkBdOILEaSdBfzgH0yH/NqQv+Lg+lv4Q8dSQBSmwCsAZCkZtoDWJbpWLcD/wq8Bz/3ITQBxGpUApDSgSblJkiSqnNAhmOMAV8FXgdcmeF4XZFS9jWms2RqAmDnG0lqptS5EPrezj+TzjQBbJmw/4ZcgUiSsto3Yd/PENZRGMsTSuek9H9rTA3AfEwAJKmLUpoAzsHCfyad6ANgAiBJ3bMVYan3WBfmCqSjUpoAUsrcrEwAJKl79iE08cYYAy7OGEsXpSQAsT+X7EwAJKl7UjoAXkaY3lfTS2kCMAGQJFUmJQH4RbYoussEABMASWqilATgl9mi6K7OJAAp8wCYAEhS85gAVMs+AJgASFLTbAfsmrC/CcDsOlMDYAIgSd2RMv5/HfC7XIF0WEoCsEW2KBKZAEhSt+yXsO/FwMZcgXSYTQCYAEhS06TUADgCYDSbEvY1AZAkVcIOgNUzAcAEQJKaZB5hFsBYJgCj2ZywrwmAJCm7PYFlCfubAIzGBAATAElqkpTq/5uBa3MF0nEpTQCOApAkZecUwPXoRA3AAtKCcbiI2mZbYHvCcqnrgNXAjaT9QmvuFgI7AIsJLyFrgRuA20sG1QEmAPXoRCfABYRagFgpN0Gq2tbA4cCjgYMJ66Mvn+L77iBMfnIBcBbwLeCPNcXYF/sDhxJ+FvsD92TqD8JrgUuAs4HvE34efs6MzhEA9ehEDQDA1YT1n2O23QrEK83mEcDngTXEPdebgDOAo2nYL2vLLANeSyhYYj9jrgVOAPaqOfY22orQLBt7rx9af8it9Sri7/MHCsQ7rT8SfyEp801LuT0COIf453mq7Q/ACwjDqzSaJcDbgVvI93PYSEjq7lnjdbTNA4m/v5uBbeoPubX+hvh7/e8F4p3WtcRfyM4F4pUmWw58mvAhlrPwH95+BNyvputps6cAV1Ddz2EN8EYa1JO6QZ5P/H39fYF42+zlxN/rjxSId1rXEX8hOxWIVxr2UOAyqitwhrfVwAvruazWWUioqq8yCRvezsQayMn+lfj7eXKBeNvspcTf648XiHdK80mr2hzLFYgU4enA94A9ajrfUuCThDa8lM6zXbMUOAV4NfU1lTwWOI+0ee+7xg6A9elMJ8Abic9kti8QrwRwHKFduI63zam2T2ISALACOJdyP4ebCG3fgmuIv49HFoi3zV5E/L3+XIF4p3Uz8ReyokC80lNI6+2ca/sC/W6LXk7Zwn+wXU8Y4tln25F2D+9bf8itdjzx9/qL9Yc7vZXEX8hUY6qlKt2P0BZfutAZbJ+mnzUBK4DzKX//B9uvCKMP+uoQ4u/dWhpWLd0CxxF/v/+rQLxTmk/ah5ezp6lOi4AvEdqcm+IF9K85YAXwHeDA0oEM2Qf4v6WDKCilL8QlOKvrXHWi7EtNAMZyBSKN4E2kdXSqyguAk+hHc8By4Ns0q/AfeBHwxNJBFOIUwPXqxOyUqaMAOpEFqRX2At5QOogZHA18gm7XBKwAvgscVDqQGZxA2gJnbeUIgHp1ouyzCUBt8SZCE0CTdbkmoMlv/sPuS0jG+mQesG/C/iYAc5dSA9ComvO1xHdmaPoHsrphF8KCPaU7mvW1Y2DTOvzNtv2Kfk3dvBdp92uX+kNuvWcQf7+/WiDeKVkDoDY4lrDQSS43Ab8mrINRxTP8ArrTMbDKDn/rgSuBSwlT/OayD2H1x75Iqf6/mTAdvOYm5XNjLFsUiUwA1AbHZjjGGuBdhCriHQjDCXcjvP28HLgqwzmGdSEJqKrwPxd45vjx70n4mSxjYhXHHJ8rx2Q4RlvYAbB+negECGmzqXWxrVPNsgvpVcIXMvt0wUsIE/vYHBBUUe2/idCRc7bq+ceRNkPpGPDbpKtvly8Rf58atTRtizyF+Hv+5QLxTitl8Y4+tbOpjKNJKwh+Q5glbRTzCEt19j0JqKLw38jcanIOBG5PPOfd537prXQJ8ffoxQXi7YKn0ZEEIOUXTKrau4l/PjcDD57j+fqeBDSh8B94TeJ5nxJxzraZT+hLEXuPHlZ/yJ3wdDqSAFgDoCb7L+Kfz1Mjz9nXJKBJhT+Ejp9/Sjj3ayLP2yYpawBsBrauP+ROOIL4+/6lAvFOaT4hoFgmAKrabgn7fi1yvzHgb4APJZx7Ki+guR0Dq+jwt4mwaErs6mfrgG8mnD/l2WmL1cR3SLtsfH/NXRN/h+dsPmk9bjtxE9Ro2yTse1HCvoMkIPf88i+geZMFVTHJzybghaQvffqrhH378Ha7njCkNcY5OQPpmZSX35SX7qxSawBMAFS1hQn7pr7djAGvIn9NQJOmDa5iet/Bm/9nMxzrtoR9+zJRWWyb8leyRtEvTfjdTZZaA2ATgKqWMkHM3TKcv8vNAU2s9p9s54R9+1K9/UHghjnu81PgtApi6YtOLKJnE4Ca7taEfR+VKYYuJgFtKPwh7WeY8uy0yS2EiY82jPj9NzCxnr3idObldw3xvRmXFIhX/fIp4p/PS4EFGWPpyuiApvX2n86ehI6AsTH9ReZ4mu4wZp9A6WLSFg5S8Fzin8vPF4h3WquIv5A+dLJRWW8irWB6VeZ42p4EtKXwh7BoSkpcuWqA2mQF8E+Egn5wHzYB5wF/TX/6RVTtGDqSANxG/IUsKxCv+uUxpBUC6wlTy+bU1iSgTYV/auK3DmsolwC7knchLQXHEv9snlQg3mndQvyFbFsgXvXLYtKWrB4jdAY7JHNcbUsC2lT4vzpDbD+sIC5p4PnEP5s5+8gku5n4C1lRIF71z8mkFwhrqKYm4IMZYpu8fYG88wQsJ6zAl7vwPy5jjAM5Cv8x+jELoMo5no4kADcRfyHbF4hX/fMs8hQKfawJ6Nub/yC+XSuITxp4IfHPZ475MbK5gfgL2aFAvOqfLYHLyVM49KkmoI9v/mM0aK51ddZf0JEE4DriL2SnAvGqn15JvgKiDzUBfXzzHyPMa/LACmKUhr2Y+Gf0MwXinVbKals5ZlqTRrGQMOd5roKiyzUBfX3zH6Nhb1fqrJfQkQTgj8RfyC4F4lV/HU7ewqJNNQGfY7ThXLsCF2Q+dxve/McII5r8TFIdXkr8c/rp+sOd3jXEX0gflttUs+QuXNuUBPyE6RftmQccSdrvc5sL/zHCIktSHV5G/HP6nwXindZVxF/I3QvEq37bivzV221KAjYTEoF3AH9FWKPg/cBvKzhXmwr/3Os0SDN5BfHP6ocLxDutK4i/kHsWiFfagbz9AcZoV5+AOra2tPmPAd8g75oP0mz+mvjn9QMF4p3WH4i/kL0KxCsB7EG+oYGDrU01AVUX/m158z+DMFukVKeUUUn/ViDeaV1K/IXcp0C80sDupCWwU219rwlo05v/D3BBMpXxKuKf23cViHdaFxF/IfsViFcaZhJg4S/V7Q3EP7tvLxDvtH5G/IU44YaawCTAwl+q0z8Q//y+pUC800rpUf2QAvFKUzEJsPCX6vI24p/hN9Yf7vTOIf5CHlEgXmk6JgEW/lId/pn45/i1BeKd1veJv5DH1B6tNDOTAAt/qWr/Rvyz/MoC8U7rO8RfyBMKxCvNZk/aM0TwXZnjHHVbS1hmObcqCv/vAksqiFWKlZK8v6xAvNP6JvEX8uQC8UqjaEsSAGFSkfWZY51pu76i67DwV198hPhn+sUF4p3W14m/kCMKxCuNqqok4DEVxPpQ8jddTLWdQVgwKDcLf/XJJ4l/rl9QIN5pfYX4C3l2gXiluWhLnwAIhd3bCNXzuQvTGwmTl8yvIG7b/NU3nyX+2T6mQLzT+jzxF/LcAvFKc9WmmgAIScv7x8+RGudVhF7H21QUq2/+6qMvEf98H1kg3mmdSPyFPL9AvFKMtiUBEArt44BTCGvdjxrX1YQqysOpdpEcC3/11cnEP+PPKBDvlBYAGxL23zJXIFLFLgMeC3yPfKtYLgVOA55KGE6b2ypCVeNngS2A/YH7AfcGtmNiEZxVwHWEJYF/QWjyqNqrgRMyH/MM4OnA7ZmPK+W2MGHflDI3u/8gPpP5qwLxSil2B35P3rfWqvoENJVt/uq7lOHzhxWId0rzsQZA/XIloSYg51vyEsKa9H1IAqp48z+LMKR4debjSlXpRA2ACYD6yCQgTpWF/5rMx5WqlFL2mQBIhV0JHApckfGYS4BTgUdnPGZTvIpq2vyfhIW/2qczNQDrE/ZPuQlSaZcRCuucNQFLCTUBXVoq+3nA+zIf8yzCRGJ2+FMbpZR9G7NFkSg1AdgqVyBSIVcCjydvTcAywhTbO2c8ZimPBT5F3gmEfPNX23WmBmBdwv6LcgUiFXQ5+WsCdgG+QBi+11Y7Ap8jb1Ofb/7qgs4kAGsT9jcBUFdUURPwGOAVGY9Xtw+Rd90A3/zVFSlJcUqte3YvJn484ycKxCtVKfc8AbcSagPa5lDyj/NfWusVSNW5jvjfhcZ8HlgDIN1Z7iGCy4A3ZDpWnd6d8VgO9VPXpDQBpJS52T2L+EzmvwrEK9VhD/KtHbAa2KHO4BMdRr43f+f2VxetIf53ojGd51NrABbP/i1SK11Ovo6BS2nXwlkvy3QcO/ypq2IL8c2kdbzP7nHEZzJnFohXqlOuPgEX1B14pBXAHdjmL01nEWm1gY0xn/DLHssaAHVdrj4BDyIkE033ZNKrKG3zV5elNGk1qjbMToDS7K4EngDcmHicNkwRnBrjT4AnYuGv7kpJABrVATC1BsAEQH3xB+DYxGM8JEcgFUuJ8VbgmTTsQ07KrFMJgJ0ApdF8m7AOeKy9cwVSkXnAvRP2fx9wbaZYpKbqVBOANQDS6D6XsO8euYKoyE6kddxLuTdSW3SqBsBOgNLofpKw77JsUVRjm4R9ryfvWgpSU3UqAbAToDS6lI6ATR8Wl/LBltpBUmqLlBffxjUBrCNMThBjIe1e7Uyaq+0S9m1U9j+FlNrAFdmikJqtUzUAkDYzUWOmNZRq8ICEfVdli6IaKfHtTIMWOZEq1LkEwJEA0miek7DvldmiqMb1xL8MzAOOzBiL1FSdGgUAJgDSKA4kLJ4V67e5AqnIJsK0x7HeSFpHQqkNOlcDkNL250pf6oPtgC8x8TsTow3rAaTEuAvwWdLukdR0nUsAUhYo2DpHIFKDLQdOB/4s8TjfTw+lcj9I3P8I4CTsHKzuSqn1bmQCkDJvtwmAumwFYU371Gl8f0vzmwAgJDqbEo9xNPBxrAlQN1kDMMQEQF21HPgWoe0/1UkZjlGHP5KnpuJ4rAlQN3WuE6AJgHRnud78ATYAn85wnLp8LNNxrAlQF1kDMKTps5tJc5XzzR/g88AVmY5Vh/8iX3PF8VgToG4xARhiDYC6JOebP4QRNu/IdKy6bAL+MePxrAlQl9gEMMQEQF2R+80f4F9JG1tfyheA72U83vFYE6Bu6FwNQMooAJsA1AW53/wBLgT+OePx6vYS4LaMx7MmQF3QqcWAwBoA9dsK4DvkffNfBRxF2iRbpf0OeGnmYx4PfAKTALVXSg1AzoQ6m5cAY5HbxwvEK+WyHPgp8c//VNt64PA6L6JibyXv/RkjNDHYHKA2upL45373AvHO6hjiL+iLBeKVclgBnE/egm0j8Nw6L6ImHyR/EvAprAlQ+9xC/DO/vEC8s3o68Rd0WoF4pVRVvPlvBI6r8yJqNI9qkgBrAtQm8wi/5zHP+mYa+qw/nvhf4O/XH66UxMI/jkmA+m4b4p/zVQXiHclDib+o8wvEK8Wy8E9jEqA+2434Z/yPBeKd0YLxPx0FoD6oorf/JkLP9s9lPOZ0tgXuA9ybcC2DIbi3AjcQZu+7FFhXYQxjwKsIbfevyHjcowlxv4hQVSo10bKEfRs5AgDgnsRnNVcXiFeaq6o6/B1bYczzgEcA7yfMKbBphJjWAmcBbyEkClXG9u8jxDPX7dPYMVDNdTDxz/a5BeIdyfbEX9QtBeKV5qJthf9S4JWEGQRT4zwb+HOqKVRNAtQ3hxH/XH+3QLwj2Yr4i9pQIF5pVG0q/OcDLwauzxzvGKEG4ZAKYjYJUJ88m/hn+msF4h3ZOuIvzOmA1URtKvz3AM7JHOvkbTNh4q7cv68mAeqLFxH/PJ9YIN6R3Uj8he1SIF5pJm0q/J8GrMwc60zbJcB9M1+DSYD64NXEP8v/t0C8I0tpb7xfgXil6SwndLjJXfhXMdTvBYRmtLoK/8F2E6GDYU4OEVTXpUyL/c4C8Y7sAuIv7OAC8UpTadOb/6sJ1fJ1F/6DbTX5+wVYE6Au+zfin+E3Foh3ZGcSf2FdWvhE7dWmN/+UqsSc2xrgcZmvzZoAddXHiH9+X14g3pGdTPyFPadAvNIwC3+TAKlqXyT+2a1yzpBknyb+wv6y/nCl/2XhbxIg1eG/iX9ujygQ78g+QPyFvb5AvBJY+JsESPU5m/hn9rEF4h3Z24m/sP9TIF7Jwt8kwCRAdfol8c9rzjVIsnst8RfW6PGN6qS29fYvXbDPZXN0gDS1K4h/VqtcmyPZi4m/sM8UiFf9tRj4IfkL/z6/+U/e2lQT8B+Z45SmkzJh190KxDuyI4m/sFMKxKt+mg+cRv7Cv01v/n8CTgL+lbBS4KmEt/bc52lTTcCbMscpTTaP8FkR+4wuqT/k0T2B+Av7fv3hqqf+gf4W/pcBRzF1lfcS4A3AqsznbEsSsJGGd7JS621N/PPZ+EXzHkL8xf2sQLzqn4PIO21umwr/7xOW7Z7NAaS1U7Y5CbgG2DZznNLArsQ/mzcViHdO7kP8xV1WIF71y3zgJ+Qt/NvS5v8DwtvHqHYH/pA5hrb0CTghc4zSwH3pcBm5M/EXd3OBeNUvx5G38G/Lm/8ZxLUd7glcnjmWNtQEbAD+LHOMEsDDiX8uLygQ75wsJu0DdV79Iasn5pE2/nbys9rVN//J+loT8NHM8UkATyX+mfyfAvHO2TriLzDlg0qayWHkK/y7/uY/WR9rAu4gzBMh5fR84p/JLxaId86uJ/4C714gXvXDZ8lT+PflzX+yPtYEuD6Jckv5Xf9wgXjn7LfEX+D+BeJV920J3EZ64d+3N//J+lYT8O3McUmdny4/ZV713B8EEsDBpBUEmwlVd7m1qfAfaFMS8NHEuNYACzPHpX5LSUxfWyDeOTud+At8ZoF41X1/S1pB8O4KYmpj4T/QliRgAaEpJCWuh2SOSf32eeKfxRcWiHfOTiL+Am1zUxU+RvwzeQ1hdEtObS78B9qSBNwf2JQQUxU1P+qvbxP/LD69QLyzmjylaMpsRdulBCJN414J+54IrM0VCKHwzz3RzJnA04DbMx93JpcRps29IuMxlwLfJG8ScCHw44T9nQ9AOaWUcY2cK2dyApAS5CjTlEpztTxh3zOzRdGdwn+gLUlAys/QoYDKqfMJgDUAapqU4XDXZIqha4X/QBuSgKsT9t0mUwwSmADMyBoAVWFjwr6LMpy/isL/LOAIyhb+A5cBjybvXOVLgf8mzzwBKX04Gr8Cm1pjAWkLTbUiAbAJQE2zOmHfeyeeu6o3/yeRdl25XQk8nrw1AUuAU0mvCUj5GTbpHqvdVhA/3f1qYH3GWCpzEPG9HC8qEK+671Tin8nPJZy3C73956ppowPmE2omYs/9hsjzSpOlrJabM7Gu1F7EX+S1BeJV972X+GdyPXGjCKoo/M+iHetlNGna4JS518eAZ0ScU5rKw4h/Dn9WIN4oy0n7sHVFQOV2PGmFwI+AreZwvj6++U/WhJqAPYAbEs+ZMoRUGvYU4p/D7xaIN8o8QseZ2Au1161y25P0wudbzD6ccD7wzgznanvhP1BFErAGePYI596HtHVJxoCroq9cuquU2qgvF4g3WsqKgPcsEK+673ekFz5XAi/mrtXwC4AnAj/JcI6uFP4DVSQBm4EvEGb5m2wX4B2E2oLU83wyzy2QgLSawY8UiDfaJcRf6IMKxKvuS1mFa/J2B2HRq9OAHxJGvuQu+LtQ+A/sSejEVMU9upIwKuKbwK8IyUGuYz+hipuh3von4p/Ffy4Qb7Sz8ZdOzXIv0uaEr3vrSuE/UGUSUMV2BbBFJXdCfZWyEuDrC8Q7ksnzAEDaXADOBqgq/A74WukgRvRDmjPJTy6XAY8i72RBVXovIWGUcuncLIAwdQLgbIBqonfS/A/1Mwn9Cbo4Ac1gsqArSwcyi2uAj5cOQp2TkgCklKmVMgFQW/wc+GjpIGbQxTf/ydpQE/A6uv0zUBm9qQFICXaHhH2l2byZZr6BdvnNf7Im1wScDnyxdBDqpKUJ+67MFkVmUyUANyYcb6eEfaXZrASeQ7MWeenDm/9kTawJuA54Uekg1Fkpi5Jdly2KGjyDtN7PUtVeSvme5l3s7T9XTRkdsBp4SMXXqn77AnHP5vUlgk3xcOJ/EX9ZIF7101soW+h8l34X/gNVTBY0l+0OwuqKUpWOJe75/M8Swaa4F/G/jK2q6lDrvZIy8wOcTNo69V2zC6GTZt0/h1XA4TVcn7SQuS+StZ4wrXWrLCP+F3IjTsChej0buIV6CpxNhOGIU/Wd6bsVpC3dPNftUuCAWq5MCh4FrGP0Z/SNZcJMdzvxv5h2BFTd9iJ0xquywLkcZ7qczTxCrcwqqvs5bAY+gQuPqYynArcx+zP69lIB5pDSsWe/AvFK84DjCMPTchY4qwgL1NjeP7q7AyeRv3nmp4Q+SlJJuwMnctcX5U2EIcGPLhdaHucR/0v6uALxSgMLgRcC55NW2FwB/CNObpVib+BjpDXRbCAsFmTti5pmKfAw4EjC3Bidqf3+JvG/sEcXiFeayn2BvyNMELOSmZ/btcCPgXcRMnjb+fNZBDwT+DBwMaGv0Ew/i6sJE/q8lA59qEpNM2+af/8UcHzkMV8FfDByX6lKOxKGrS0DlhOq91cTCpyrCG13qt5Cws9hZ2BrYEvCz+F6wuRCq8qFJvXHgmn+PWXygh0T9pWqdMP4prLWE3rxX1o6EKnPpqvmTPmQtMpOkqSGmy4BSKkBMAGQJKnhTAAkSeohEwBJknrIBECSJP2vhYQhUbFzAbhQiiRJDTZdDcB64NaE4zoUUJKkBptptrOUZoCdE/aVJEkVmykBuC7huLsk7CtJkio2UwJwbcJxd03YV5IkVWymBOCPCce1BkCSpAabbi0AsAZAkqSBZcCxhCXv9wA2Edaz+DbwVWBdscgqcBzxwwC/WSBeSZKqcCxwM9OXeVcAjy8WXQUeT3wC8LMC8UqSlNs/MFq5twF4TqEYs9uH+ATgTwXilSQppycwt0nx7gD2LRJpZsuJTwA2AVvWH7IkSVnMA37N3Mu/U0oEW4XbiU8C7l4gXkmScngkcWXfRuBuBeKds5mGAYJDASVJ/XRw5H5bAA/JGUhVZksAHAooSeqjeyfs24r1cKpMAKwBkCS1VUoZtilbFBWqsgnAGgBJUlvtlrBvystzbawBkCTprlJeYlNenmtjDYAkSXe2gLR2/E4kANYASJL6ZhdCb/4YdwArM8ZSGWsAJEm6s9Tq/7FcgVSpyhqAHXE2QElS+6TUYLeiAyDMngCsBNYmHHv3yH0lSSplr4R9r8kWRcVmSwAgrRlg74R9JUkqIaXs6lQC8NuE45sASJLa5r4J+6aUmbUaJQH4TcLxWzEfsiRJ4xYAD0rY/9e5Aqla1QnAIQn7SpJUtwcB2yTsf2muQKo2SgKQks3sBtwrYX9JkuqU8uJ6Gx0aBQBwHmkLG/x5wr6SJNXpmQn7/pSWzAEwFxcQLipmO79AvJIkzdXuwGbiy7u31B9yvFFqAAB+kHCOA0nrUSlJUh2OBeYl7H9WrkCa5AjiM6Ix4MP1hyxJ0si2BK4ivpxbCyyqPeoaLAVWE39j1gDb1x61JEmjOYa0F91T6g+5Pl8h7ea8s/6QJUma1RbAL0kr455Xe9Q1ejZpN+d24B61Ry1J0sz+krTybS2wrPaoa7SYMMYx5SadWHvUkiRNbxkTS/jGbl+tPeoCPkTaTRoDnlR71JIkTe0/SS/XDq096gL2JkwKlHKjrgKW1x24JEmTHEbauP8xQt+BlKGDrfIN0rOlUxl9DgJJknLbhbB0b2p59hd1B17SY0m/YWPA22qOW5IkCOP1B9P2pmx/oqNj/2fyP6TfuM3AcXUHLknqtS2AL5HnRfYVNcfeCPcnvS/AGLAReE7NsUuS+mke8DHyFP6XEmYP7KUTyXMT1wFH1Ry7JKlfFpCnx/9g6/VKt3cHbiXPjdwEvKbe8CVJPbEUOI18hf936w2/mV5Mvhs6BnwCWFLrFUiSumxv4OfkK6duA/ao8wKaah7wLfImAb8E9q3zIiRJnfQ80mewnby9rNYraLh7ACvJe4PXAe+gh8MrJEnJ9iBvlf9g+w49mvRnVE8lz6iAydvvCEs0OmmQJGk2y4G3E5agz10eXQnsVN+ltMtbyH/DB9tFhERgq9quRpLUFncD3grcTDVl0FrgoNqupoXmASdTXRIwBlwPvIcwD4Ekqb8WAk+bexCoAAAFNklEQVQkTOqzjmrLnuPruaR2WwqcTbU/iMF2GfAB4JmEIYmSpO7aAtifMPf+l8g3DH227R/ruLgSqujMsC1wJvCgCo49k2uB3wKXE5KDG4GbhrYbCdVDq2qOS5I0vXnAdsD249vw17sQOvTtAdwX2Kbm2N4HvLbmc9amqt6MOwA/APap6Pgp1hMSgpu5c4IwnCTcNMX3bCwRrCS1yGLuXJDvMPT3qQr4wddN7Fn/n8BLCbUAnVTlTd+RsHTwQys8R51uY6JW4RbC0Mep/pzq6w0F4pWkGEuAFYQe9ctH+Hq4QF9cIN4qnAC8jrBoXWdVnXUtBb5IGCbYZ2uYPUkYfL1q/O+rhrbV9YcsqaVWEKrKh7dBgT1dYT7894X1h9wYmwkF/wmlA6lDHdUuC4B/J1SlKM4YITm4bXwbJAa3MZE0DG+TE4hVQ99nU4bUPIuBrQmF9XQF+LLxr4f/XD7F9yrO7cALgS+XDqQudba7HAv8B+EhV1l3EJKEtVN8PdW/jfL19ZhcqPsWE2YoXUwoqHN8vT39futugksJS9P/onQgdaq748X9CNnVfjWfV/VYT2juWEfIpgcJxSBJuH38/9aMf+9qQv+IwZ+DGorbCDNL3kqokruFUAsyOD5Dx2Do/9V9C5h4yx0UxhDehrcY+v8tCS8bCwlNkVsR2rYHhe5wQb5o/P+2Gv/eheP7bjl+rAVDx1f3fAZ4OROfLb1RouflYsK4yr8l/IJJuWxkYpjnIOmAiURiEyG5gInkZPJ+A4OkZGB434FBQjMwaKqZyiCGuRhOcuZqUKDNxaCQnGy40B0YFJAD8wlDgGeKYR6hynpgUKgO7zscw/A5ltPMnuJqr2uBV9OjKv/JSv5C7Q18BHhswRgkSf0yBnwOeA1hVFdvlVxk5zfAocCLgCsKxiFJ6oczgYOB59Pzwh+aU6W2JfBc4G3AnmVDkSR1zI8JC9adUTqQJmlKAjCwCHge8FfAgwvHIklqrw3AKYTRZ2cWjqWRmpYADDuQkAg8mzt3HJIkaTq/Az4FfBL4U+FYGq3JCcDAFsDDCLMJPhO4d9lwJEkNczHwFcL08xcUjqU12pAATLY38BDCGgMPBQ5g7sOdJEnttBI4D/gpcO74nzcUjail2pgATDaPOy8ZeQ9gJ6ZfXrLkyAdJ0l3dwcTqq8OrsN4IXEcYKXb5+DbdXBuaoy4kAHM1mIZzeNsF2HWKfx9sO9PPeyVJczWYJnyw/ZEw6c7KGbZrcTbP2lmojWYrJmoStmPqFbSm+3pZgXglKdZm7rpa6fDfp1rNdCUTb+6dXkK3S0wAqjefOycEk/8cThi2ZWJFr+GVvpwyWdKobmdiFdBbx7fB19MtQz7898lTXqujTADaYRETS4AOLws62LblzsnDcAIx+N6lWBshNdVgrYnh5b4nF+BTLQM+/P2DwntTzbGrpUwA+innUqaDr12sRX0Rs1z2bF+7oqVq5we2cppuCdVtmWgKmUdIGuYN/X05EyvCbTG+3+RlXeHOq8sNjjn4fvXDZsIbMUwsOw0TqzcOVmQc/Dn4/sEb9mDlx8Ey1IMlpkddylrqDBMAdcmgVgImkpDhJWgHa8PDxLrvcOckY2Dy+u/D+w4MkpCB6ZbTHcQyF8Nr3ceKqQ4eXkZ52OTljIcL34HJb7HDSy4PrBz6eni548G+0y3pbNW2JEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSxv1/g/Pj1uWtL5QAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

const MemoDamage = React.memo(Damage);
export default MemoDamage;