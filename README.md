# "Hoàn cảnh sáng tác" của Redux?

- Từ trước tới giờ, ta luôn biết rằng ReactJS là một thư viện rất mạnh mẽ và phổ biến, tuy nhiên vẫn tồn tại một vấn đề khá đau đầu là làm sao để quản lý được trạng thái của ứng dụng đó một cách triệt để.

- Nói qua một chút về lịch sử hình thành Redux, cũng như kiến trúc Flux và Elm

`Năm Quý Tị (2013), Facebook gia tộc bố cáo thiên hạ rằng Ăn Gô La đại pháp (Angular) của Google gia tộc chậm chạp, nặng nề, cho xuất thế một bộ chiêu thức gọi là Rối An Tâm Pháp (React).`

`Thế nhưng Rối An Tâm Pháp lại chỉ là một bộ tâm pháp cường thân kiện thể, không thể dùng để rèn luyện nội công (chỉ là một library để render view). Do đó, không lâu sau Facebook gia tộc tiếp tục cho ra đời một bộ tâm pháp cơ bản (kiến trúc thiết kế) và một công pháp cùng tên là Phờ Lắc thần công (Flux). Nghe đồn Rối An Tâm Pháp và Phờ Lắc Thần Công kết hợp lại sẽ thành tuyệt học dời non lấp bể, không gì không làm được. Nhân sĩ giang hồ (coder) vốn nhẹ dạ cả tin lại rủ nhau tu luyện.`

`Phờ Lắc thần công rối rắm khó học, nhân sĩ 10 phần học thì 4-5 phần tẩu hỏa nhập ma, phần còn lại cũng trầy da tróc vẩy mà công lực cũng chẳng được như lời Facebook gia tộc quảng cáo.`

`Bấy giờ có một nhân sĩ giang hồ tự là Đan (Dan Abramov), đang tu luyện đồng thời Phờ lắc thần công và Ê La thần công (Elm) mới nhận ra rằng hai môn võ công có nhiều điểm chung, chỉ khác chiêu thức, Đan bèn nảy ra ý định hợp nhất hai môn này lại. Không lâu sau (5/2015), Đan cho xuất thế một bộ công pháp mang tên Rì Đắt thần công (Redux), mang ưu điểm của cả hai môn võ công đồng thời loại bỏ những phức tạp dư thừa của Phờ Lắc thần công.`

`Nhân sĩ giang hồ nghe vậy mừng lắm, thế là lại kéo nhau đi học Rì Đắt, còn Đan thì được Facebook gia tộc mời về làm tộc nhân.`

`Trích "JavaScript Lược Sử Giang Hồ" có sửa đổi bổ sung (yaoming)`

# Redux là gì?

- Redux là một thư viện Javascript giúp ta quản lý trạng thái của ứng dụng triệt để hơn, được lấy ý tưởng từ ngôn ngữ Elm và kiến trúc Flux do Facebook giới thiệu

- Do vậy, Redux thường là bộ đôi kết hợp hoàn hảo với React. TUY NHIÊN, vẫn hoàn toàn có thể sử dụng với các Frameworks khác như Angular, Backbone, Falcor, Deku

**-Note: Redux là một thư viện JS khác với Redux Framework là một Wordpress Framework**

# Nguyên lí hoạt động của Redux

![Redux lifecycle](https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

Redux được xây dựng dựa trên 3 nguyên lý:

- Nguồn dữ liệu tin cậy duy nhất: `State` của toàn bộ ứng được chứa trong một object tree nằm trong `Store` duy nhất

- Trạng thái chỉ được phép đọc: Cách duy nhất để thay đổi `State` của ứng dụng là phát một `Action` (là 1 object mô tả những gì xảy ra)

- Thay đổi chỉ bằng hàm thuần túy: Để chỉ ra cách mà `State` được biến đổi bởi `Action` chúng ta dùng các pure function gọi là `Reducer`

Về cơ bản, Redux có 4 thành phần sau:

- **Action**: Là nơi mang các thông tin dùng để gửi từ ứng dụng đến Store. Các thông tin này là 1 object mô tả những gì đã xảy ra

```js
export const INCREASE = "INCREASE";
export function increase() {
  return {
    type: INCREASE,
  };
}
```

- **Reducer**: Là nơi xác định State thay đổi như thế nào

```js
export default function counterApp(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        increase: ++state.increase,
        decrease: state.decrease,
      };
    case DECREASE:
      return {
        increase: state.increase,
        decrease: ++state.decrease,
      };
    default:
      return state;
  }
}
```

- **Store**: Là nơi quản lý State, cho phép truy cập State qua `getState()`, update State qua `dispatch(action)`, đăng kí listener qua `subscribe(listener)`

```js
import { createStore } from "redux";
import counterApp from "./reducers";
let store = createStore(counterApp);
```

- **View**: Là phần hiển thị dữ liệu được cung cấp bởi Store

# Data flow của Redux (giải thích cặn kẽ bằng cách ứng dụng vào thực tế)

- Trong một ứng dụng thực tế, chúng ta có nhiều thành phần hơn, và chúng ta sẽ khó mà hiểu hết được các hoạt động của Redux nếu chỉ nhìn vào 4 thành phần cơ bản trên. Chúng ta sẽ tìm hiểu kĩ hơn thông qua các hình tượng minh họa sau:

- Tưởng tượng ứng dụng của chúng ta là một văn phòng, có các thành viên làm việc với nhau để giải quyết công việc chung. Cùng điểm qua các nhân vật trong phòng trước khi xem các họ tương tác với nhau để giải quyết công việc:

#### The Action Creators

![The Action Creators](https://images.viblo.asia/24191997-0564-4436-a807-a0276cb44289.png)

Đầu tiên là The Action Creators. Anh ta giữ nhiệm vụ tạo ra các Action, là bước đầu tiên trong luồng mà các thay đổi và tương tác đều đi qua. Bất cứ khi nào trạng thái của app hay là render của view thay đổi thì đầu tiên là một hành động sẽ được tạo ra.

Hãy hình dung anh này như một anh chàng đánh máy, anh ta biết bạn cần truyền đạt điều gì và cần phải đánh ra văn bản theo định dạng nào cho mọi người đều hiểu được.

The Action Creator tạo ra một action là formated object chứa type và thông tin của action đó. Type thường sẽ là một hằng số được định nghĩa trước, kiểu như INCREASE hay DECREASE.

####

![The Store](https://images.viblo.asia/8052ba36-c337-4c02-bb04-246e43ab4512.png)

Tiếp theo là The Store. Hãy hình dung đây là ông sếp đầy quyền lực, toàn bộ các thao tác với State tree (getState, updateState, registerListener...) đều do ông này quản lý.

Cái ông này làm nhiều việc nhỉ (?) Không thực ra ông ấy chỉ quản lý trạng thái của State tree thôi. Khi nhận được Action ông ấy sẽ đi hỏi The reducers xem State sẽ thay đổi ra sao chứ không tự làm.

Nếu đã biết qua Flux thì hẳn là bạn nhận ra ông này nhận trực tiếp Action mà không thông qua Dispatcher. Đó là bởi vì trong Redux, nhờ tiếp nhận tư tưởng của Functional Programming, ông sếp này tự biết cách hiểu Action và tự điều phối nó (dispatch()), nên không cần thuê thêm anh Dispatcher.

#### The Reducers

![The Reducers](https://images.viblo.asia/4e99ae64-bf4d-497f-b3ed-b3e85a0e3e94.png)

Tiếp theo là The Reducers. Khi The Store muốn biết State thay đổi như thế nào, ông ấy sẽ gọi cho The Reducers. Ở đây có một ông là Root Reducer nữa, ông này sẽ chịu trách nhiệm cắt ra State cần thay đổi dựa trên keys mà The Store gửi cho và đưa nó cho Reducer biết cách xử lý.

Hãy hình dung đây là một nhóm các thanh niên cuồng Photocopy (yaoming). Họ không thích làm rối tung những thứ họ được đưa cho, nên họ tạo ra bản sao của chúng và thực hiện thay đổi trên bản sao đó.

Đây là một trong những ý tưởng quan trọng của Redux. State không được thao tác trực tiếp. Thay vào đó, mỗi phần được sao chép và sau đó tất cả các phần được kết hợp thành một đối tượng trạng thái mới.

Các reducer gửi bản sao của chúng cho root reducer, và root reducer sẽ ghép các bản sao với nhau để tạo State mới. Sau đó, root reducer sẽ gửi các State mới trở lại Store và Store sẽ sử dụng nó như State chính thức mới.

Nếu ta có một ứng dụng nhỏ, ta chỉ có thể có một reducer làm cho một bản sao của toàn bộ State và và thay đổi nó. Hoặc nếu ta có một ứng dụng lớn, ta có thể có một Cây Reducers (Tree of Reducers) . Đây là một sự khác biệt giữa Flux và Redux. Trong Flux, các Store không nhất thiết phải kết nối với nhau và có một cấu trúc phẳng. Trong Redux, Reducers là một hệ thống cấp bậc, hệ thống cấp bậc này có thể có nhiều mức độ cần thiết, giống như các hệ thống cấp bậc component.

#### The views: smart and dumb components

![The views](https://images.viblo.asia/70733a04-b1f1-4467-9181-1f6f94686704.png)

Trong Redux có 2 khái khái niệm: smart and dumb components.

- Smart component: có thể gọi là containers:
  - Hãy hình dung đây là anh quản lý của nhóm nhỏ, anh ta phụ trách các Action. Khi các thành viên dưới anh ta (dumb components)cần phát 1 action, anh ta sẽ gửi action cho các thành viên dưới dạng props, các thành viên chỉ cần coi đó là các callback mà không quan tâm nó là cái gì.
  - Anh ta không thích ăn diện (không có css).
  - Khi có việc cần thay đổi (DOM) thì anh ta sẽ sắp xếp các thành viên dưới làm chứ hiếm khi tự làm.
- Dumb components: có thể gọi là components:
  - Hãy hình dung đây là mấy thanh niên học việc, thiên lôi chỉ đâu đánh đấy.
  - Mấy thanh niên này không phụ thuộc trực tiếp vào các Action, vì được anh quản lý đưa cho rồi. Điều này có nghĩa là mấy thanh niên này có thể đưa sang bộ phận khác làm cũng đc, miễn là có anh quản lý đưa "hàng" cho xài.
  - Mấy thanh niên này thì đẹp trai, tóc tai vuốt vuốt các thứ (có css riêng), nhưng đôi khi bị cấp trên bắt mặc theo ý sếp (nhận props style) thì vẫn phải chịu.

#### The view layer binding

![The view layer binding](https://images.viblo.asia/2e1a3bcd-9394-435a-9ab7-3ff831946838.png)
Để The Store giao tiếp đc với The views, chúng ta cần một ai đó kết nối họ lại với nhau, và chúng ta có The view layer binding, với React anh ta tên là react-redux.

Hãy hình dung anh này là nhân viên IT chịu trách nhiệm đảm bảo mạng trong công ty thông suốt để các components kết nối được với Store. Đồng thời cũng quản lý một đống thông tin kỹ thuật mà trong văn phòng chả ai hiểu (yaoming)

The view layer binding cung cấp 3 khái niệm:

- The Provider component: là thành phần bao quanh components tree. Giúp các components con kết nối với Store dễ dàng thông qua `connect()`

- connect() : là function cung cấp bởi The view layer binding như react-redux. Nếu một component muốn nhận được update State, nó phải tự bao lại bằng `connect()`. Sau đó, connect function sẽ thiết lập tất cả các hệ thống liên kết cho nó, bằng cách sử dụng `selector`

- selector : Đây là function mà bạn viết. Nó chỉ rõ phần nào của State mà component cần như properties.

#### The root component

![The root component](https://images.viblo.asia/2429bcf8-5730-4344-b007-37e4d6d7888f.png)

Cuối cùng là The root component. Tất cả các React app đều có The root component. Là những component cao nhất của hệ thống component. Ở Redux thì nó đảm nhận nhiều trách nhiệm hơn.

Hãy hình dung đây là một giám đốc C-level (CEO, COO....). Ông giám đốc này sẽ tạo ra The Store và chỉ định The Reducers nào được sử dụng, tập hợp The view layer binding cùng với The views.

Sau khi chỉ định và tập hợp các thành phần trong team, giám đốc của chúng ta sẽ để cho các bộ phận bên dưới tự hoạt động.
